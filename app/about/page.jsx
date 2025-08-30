'use client';

import { FaMapMarkerAlt, FaShare, FaCompass, FaCode, FaMobile, FaGlobe, FaGithub, FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const featureCards = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-blue-500" />,
      title: "Find Your Location",
      description: "Uses your browser's built-in GPS to accurately determine your current location with just one click."
    },
    {
      icon: <FaCompass className="text-3xl text-green-500" />,
      title: "View on Map",
      description: "See your precise location displayed on an interactive map with a clear marker for easy reference."
    },
    {
      icon: <FaShare className="text-3xl text-purple-500" />,
      title: "Share Your Location",
      description: "Generate a unique link to share your location with friends, family, or colleagues instantly."
    }
  ];

  const techStack = [
    { name: "React.js", icon: <FaReact className="text-4xl text-blue-400" /> },
    { name: "Next.js", icon: <span className="text-4xl font-bold text-white">N</span> },
    { name: "HTML5", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: "CSS3/Tailwind", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
    { name: "Google Maps API", icon: <span className="text-4xl font-bold text-red-500">G</span> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 pt-44">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            About Location Tracker
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            A modern, responsive web application that helps you find, view, and share your current location with ease.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="bg-blue-900/30 p-6 rounded-2xl border border-blue-700/30 backdrop-blur-sm max-w-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">What is Location Tracker?</h2>
              <p className="text-gray-300 text-lg">
                Location Tracker is a web application that uses your browser's geolocation capabilities to find your current position, displays it on an interactive map, and allows you to share your location with others through a simple link.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-14"
          >
            How It <span className="text-blue-400">Works</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 h-full"
              >
                <div className="flex justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-14"
          >
            Built With <span className="text-purple-400">Modern Technology</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/20"
              >
                <div className="mb-3">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How to Use */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-14"
          >
            How to <span className="text-green-400">Use</span>
          </motion.h2>
          
          <div className="bg-gray-800/20 p-8 rounded-2xl border border-gray-700/30 max-w-4xl mx-auto">
            <div className="space-y-8">
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Click "Get My Location"</h3>
                  <p className="text-gray-400">Allow location access when your browser prompts you. We only use your location with your permission.</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">View Your Location on Map</h3>
                  <p className="text-gray-400">See your precise location displayed on an interactive Google Map with a clear marker.</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Share Your Location</h3>
                  <p className="text-gray-400">Copy the generated link and share it with anyone. When they open it, they'll see your location on their own map.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Privacy Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-14"
          >
            Your <span className="text-yellow-400">Privacy</span> Matters
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/20 p-8 rounded-2xl border border-gray-700/30 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-yellow-500/10 rounded-full mb-6">
                <FaMobile className="text-4xl text-yellow-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">We Value Your Privacy</h3>
              <p className="text-gray-400 text-lg">
                Location Tracker runs entirely in your browser. Your location data is never stored on our servers. 
                The shareable link contains only coordinates and can only be accessed by people you share it with.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-6"
          >
            Ready to Try <span className="text-blue-400">Location Tracker</span>?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Experience the simplicity of finding and sharing your location with our intuitive web app.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get Started Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              <FaGithub /> View on GitHub
            </motion.a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}