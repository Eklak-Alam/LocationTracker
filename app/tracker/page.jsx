'use client';

import { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { FaMapMarkerAlt, FaShare, FaCopy, FaCompass, FaLink, FaSync, FaSearchLocation, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Map container style - responsive design
const containerStyle = {
  width: '100%',
  height: '400px'
};

// Default center (India) as fallback
const defaultCenter = {
  lat: 20.5937,
  lng: 78.9629
};

// Map options with dark theme for better UI
const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: true,
  mapTypeControl: true,
  fullscreenControl: true,
  styles: [
    // ... (keep your existing map styles)
  ]
};

export default function TrackerPage() {
  // State management
  const [currentPosition, setCurrentPosition] = useState(defaultCenter);
  const [isTracking, setIsTracking] = useState(false);
  const [accuracy, setAccuracy] = useState(null);
  const [shareLink, setShareLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [map, setMap] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);
  const [address, setAddress] = useState('');
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [geminiResponse, setGeminiResponse] = useState('');
  const [error, setError] = useState('');
  const [apiStatus, setApiStatus] = useState('checking'); // checking, available, unavailable

  // Get API key from environment variables with fallback
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'DEMO_KEY';

  // Initialize the map
  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Check if Google Maps API is available
  useEffect(() => {
    if (window.google && window.google.maps) {
      setApiStatus('available');
    } else if (googleMapsApiKey === 'DEMO_KEY') {
      setApiStatus('unavailable');
      setError('Google Maps API key not configured. Using demo mode.');
    } else {
      setApiStatus('checking');
    }
  }, [googleMapsApiKey]);

  // Get current location using HTML5 Geolocation API
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      return;
    }

    setIsTracking(true);
    setError('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setCurrentPosition(newPosition);
        setAccuracy(position.coords.accuracy);
        generateShareLink(newPosition);
        getAddressFromCoordinates(newPosition.lat, newPosition.lng);
        setIsTracking(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        let errorMessage = 'Error getting location. ';
        
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += 'Please allow location access in your browser settings.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage += 'Location request timed out.';
            break;
          default:
            errorMessage += 'Please ensure location services are enabled.';
        }
        
        setError(errorMessage);
        setIsTracking(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000, // Increased timeout
        maximumAge: 0
      }
    );
  };

  // Generate shareable link with encoded coordinates
  const generateShareLink = (position) => {
    const baseUrl = window.location.origin;
    const path = '/tracker';
    const params = new URLSearchParams({
      lat: position.lat.toString(),
      lng: position.lng.toString(),
      t: new Date().getTime() // timestamp to prevent caching
    });
    
    const link = `${baseUrl}${path}?${params.toString()}`;
    setShareLink(link);
  };

  // Copy to clipboard with better feedback
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy to clipboard. Please copy the link manually.');
    }
  };

  // Get address from coordinates using Google Maps Geocoding API
  const getAddressFromCoordinates = (lat, lng) => {
    if (!window.google || !window.google.maps) {
      setAddress('Google Maps API not loaded');
      return;
    }

    setIsLoadingAddress(true);

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      setIsLoadingAddress(false);
      
      if (status === 'OK') {
        if (results && results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          setAddress('Address not found');
        }
      } else {
        console.warn('Geocoder failed due to: ', status);
        setAddress('Unable to retrieve address');
      }
    });
  };

  // Query Gemini API for location information
  const queryGeminiAPI = async (lat, lng) => {
    try {
      setGeminiResponse('Loading insights...');
      
      // In a real implementation, you would make an actual API call:
      /*
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: lat,
          longitude: lng,
          accuracy: accuracy
        })
      });
      
      const data = await response.json();
      setGeminiResponse(data.insights);
      */
      
      // Simulated API response for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockResponse = `Based on your location at coordinates ${lat.toFixed(6)}, ${lng.toFixed(6)}, you appear to be in ${address || "an unknown area"}. 
      
This location service uses Google Maps API for accurate positioning. Your current position accuracy is approximately ${accuracy ? accuracy.toFixed(2) : 'unknown'} meters.

${!address ? 'Note: Address details are currently unavailable. This could be due to limited connectivity or API restrictions.' : ''}`;
      
      setGeminiResponse(mockResponse);
    } catch (error) {
      console.error('Error querying Gemini API:', error);
      setGeminiResponse('Unable to fetch location insights at this time. Please try again later.');
    }
  };

  // Check if URL has position parameters on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lat = urlParams.get('lat');
    const lng = urlParams.get('lng');
    
    if (lat && lng) {
      const position = {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
      };
      
      // Validate coordinates
      if (isValidCoordinate(position.lat) && isValidCoordinate(position.lng)) {
        setCurrentPosition(position);
        generateShareLink(position);
        getAddressFromCoordinates(position.lat, position.lng);
      } else {
        setError('Invalid coordinates in URL');
      }
    } else {
      // Only get location automatically if no coordinates in URL
      getCurrentLocation();
    }
  }, []);

  // Helper function to validate coordinates
  const isValidCoordinate = (coord) => {
    return !isNaN(coord) && coord >= -90 && coord <= 90;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white p-5 pt-24 lg:pt-44 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl lg:text-4xl font-bold flex items-center justify-center gap-3">
            <FaCompass className="text-blue-400" /> Location Tracker
          </h1>
          <p className="text-gray-300 mt-2 text-sm lg:text-xl">Track your current location and share it with others</p>
          
          {/* API Status Indicator */}
          {apiStatus === 'unavailable' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center gap-2"
            >
              <FaExclamationTriangle className="text-yellow-400" />
              <span className="text-yellow-300">Demo mode - Add Google Maps API key for full functionality</span>
            </motion.div>
          )}
        </motion.div>

        {/* Error Display */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
          >
            <div className="flex items-center gap-2 text-red-300">
              <FaExclamationTriangle />
              <span>{error}</span>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Map */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-400" /> Your Location on Map
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={getCurrentLocation}
                  disabled={isTracking}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 py-2 px-4 rounded-lg transition-colors"
                >
                  <FaSync className={isTracking ? 'animate-spin' : ''} />
                  {isTracking ? 'Tracking...' : 'Refresh'}
                </motion.button>
              </div>

              {/* Google Maps Integration */}
              <LoadScript 
                googleMapsApiKey={googleMapsApiKey}
                onLoad={() => setApiStatus('available')}
                onError={() => {
                  setApiStatus('unavailable');
                  setError('Failed to load Google Maps. Please check your API key.');
                }}
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={currentPosition}
                  zoom={15}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                  options={mapOptions}
                >
                  <Marker
                    position={currentPosition}
                    onClick={() => setInfoWindowOpen(true)}
                    icon={{
                      url: 'data:image/svg+xml;base64,' + btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                          <circle cx="12" cy="12" r="10" fill="#2563EB" opacity="0.8"/>
                          <circle cx="12" cy="12" r="4" fill="white"/>
                        </svg>
                      `)
                    }}
                  >
                    {infoWindowOpen && (
                      <InfoWindow onCloseClick={() => setInfoWindowOpen(false)}>
                        <div className="text-gray-800">
                          <h3 className="font-semibold">Your Location</h3>
                          <p>Lat: {currentPosition.lat.toFixed(6)}</p>
                          <p>Lng: {currentPosition.lng.toFixed(6)}</p>
                          {accuracy && <p>Accuracy: ±{accuracy.toFixed(2)} meters</p>}
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                </GoogleMap>
              </LoadScript>

              {/* Location Data */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Coordinates</h3>
                  <p className="text-lg font-mono">
                    {currentPosition.lat.toFixed(6)}, {currentPosition.lng.toFixed(6)}
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Accuracy</h3>
                  <p className="text-lg">
                    {accuracy ? `±${accuracy.toFixed(2)} meters` : 'Unknown'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Panel - Info and Sharing */}
          <div className="space-y-6">
            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-xl"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaSearchLocation className="text-green-400" /> Location Details
              </h2>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-400 mb-1">Approximate Address</h3>
                {isLoadingAddress ? (
                  <div className="animate-pulse h-6 bg-gray-700 rounded"></div>
                ) : (
                  <p className="text-gray-300 text-sm">{address || 'Address not available'}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => queryGeminiAPI(currentPosition.lat, currentPosition.lng)}
                disabled={!address}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <FaCompass /> Get Location Insights
              </motion.button>

              {geminiResponse && (
                <div className="mt-4 p-3 bg-gray-700/50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Location Insights</h3>
                  <p className="text-sm text-gray-300 whitespace-pre-line">{geminiResponse}</p>
                </div>
              )}
            </motion.div>

            {/* Share Location */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-xl"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaShare className="text-yellow-400" /> Share Your Location
              </h2>
              
              <p className="text-gray-300 mb-4 text-sm">
                Share this secure link with others to show your current location:
              </p>

              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="text"
                  value={shareLink}
                  readOnly
                  className="flex-grow px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm font-mono"
                  placeholder="Generating share link..."
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyToClipboard}
                  disabled={!shareLink}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap min-w-[100px]"
                >
                  <FaCopy /> {isCopied ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>

              <div className="text-xs text-gray-400 flex items-center">
                <FaLink className="mr-1" /> This link contains only your coordinates and doesn't store any data
              </div>
            </motion.div>

            {/* How to Use */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-xl"
            >
              <h2 className="text-xl font-semibold mb-4">How to Use</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="bg-blue-600 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                  Click "Refresh" to update your current location
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                  Copy the share link and send it to others
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                  Use "Get Location Insights" for information about your location
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                  Anyone with the link can view your location on their own map
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}