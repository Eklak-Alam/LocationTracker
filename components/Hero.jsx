'use client';

import { FaMapMarkerAlt, FaCompass, FaShare, FaArrowRight, FaPlay, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroSection() {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-4 pt-20 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.floor(Math.random() * 200) + 100,
              height: Math.floor(Math.random() * 200) + 100,
              top: `${Math.floor(Math.random() * 100)}%`,
              left: `${Math.floor(Math.random() * 100)}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 mb-6">
            <FaMapMarkerAlt className="mr-2" /> Location Tracking Made Simple
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Track, Share & 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"> Explore</span> 
            Your World
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl"
          >
            Discover the power of precise location tracking. Share your whereabouts with friends, 
            explore new places, and never get lost again with our intuitive location platform.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg shadow-blue-500/30"
            >
              Get Started <FaArrowRight />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 border border-gray-700"
            >
              <FaPlay className="text-blue-400" /> Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
          >
            {[
              { value: '100%', label: 'Accuracy' },
              { value: '24/7', label: 'Availability' },
              { value: '1M+', label: 'Users' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm border border-gray-700/30"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right content - Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative"
        >
          <div className="relative max-w-md mx-auto">
            {/* Main mockup */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative z-10 bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-700/50"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700/30">
                {/* Map area */}
                <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-500 relative overflow-hidden">
                  {/* Mock map points */}
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        top: `${Math.floor(Math.random() * 100)}%`,
                        left: `${Math.floor(Math.random() * 100)}%`,
                      }}
                    />
                  ))}
                  
                  {/* User location marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                      <div className="relative w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                        <FaMapMarkerAlt className="text-white text-sm" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* App content */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="h-4 bg-gray-700 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-gray-800 rounded w-16"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaCompass className="text-white" />
                      </div>
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                        <FaShare className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="h-10 bg-gray-700 rounded-lg w-32"></div>
                    <div className="h-3 bg-gray-800 rounded w-20"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              initial={{ x: -50, y: -50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="absolute -top-5 -left-5 bg-blue-600 p-3 rounded-xl shadow-lg"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div className="text-white text-sm">
                  <div>Precise</div>
                  <div>Location</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="absolute -bottom-5 -right-5 bg-purple-600 p-3 rounded-xl shadow-lg"
            >
              <div className="flex items-center">
                <div className="text-white text-sm text-right mr-2">
                  <div>Instant</div>
                  <div>Sharing</div>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <FaShare className="text-purple-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}