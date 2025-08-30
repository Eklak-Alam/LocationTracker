'use client';

import { useState, useEffect } from 'react';
import { FaHome, FaMapMarkerAlt, FaShare, FaInfoCircle, FaGithub, FaBars, FaTimes, FaUser, FaCog } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Contact } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', icon: <FaHome className="text-lg" />, href: '/' },
    { name: 'Tracker', icon: <FaMapMarkerAlt className="text-lg" />, href: '/tracker' },
    { name: 'About', icon: <FaInfoCircle className="text-lg" />, href: '/about' },
    { name: 'GitHub', icon: <FaGithub className="text-lg" />, href: 'https://github.com/Eklak-Alam/LocationTracker' },
    { name: 'Contact', icon: <Contact className="text-lg" />, href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl py-4' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <span className="font-bold text-xl text-white">
              LocationTracker
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`flex items-center px-4 py-2 rounded-lg mx-1 transition-all duration-300 ${
                  activeLink === item.name.toLowerCase()
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
                onClick={() => handleLinkClick(item.name.toLowerCase())}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* User Actions - Desktop */}
          {/* <div className="hidden md:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              <FaUser className="mr-2" />
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
            >
              <FaCog className="text-lg" />
            </motion.button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300 ${
                      activeLink === item.name.toLowerCase() ? 'bg-gray-700 text-white' : ''
                    }`}
                    onClick={() => handleLinkClick(item.name.toLowerCase())}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </motion.a>
                ))}
                {/* <div className="pt-2 border-t border-gray-700">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                  >
                    <FaUser className="mr-3" />
                    Login
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                  >
                    <FaCog className="mr-3" />
                    Settings
                  </motion.button>
                </div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}