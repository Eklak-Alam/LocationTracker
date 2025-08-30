'use client';

import { FaMapMarkerAlt, FaCompass, FaShare, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 px-4 pt-20 lg:pt-32 pb-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff10_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 mb-6"
          >
            <FaMapMarkerAlt className="mr-2" /> Real-Time Location Tracking
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Track & Share Your 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Location</span> 
            Instantly
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed"
          >
            Discover the most precise location tracking platform. Share your real-time location with friends, 
            family, or colleagues with just one click. No downloads required.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Start Tracking <FaArrowRight />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-700"
            >
              How It Works
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
          >
            {[
              { icon: <FaCompass className="text-blue-400" />, label: 'Precise' },
              { icon: <FaShare className="text-green-400" />, label: 'Share' },
              { icon: <FaMapMarkerAlt className="text-purple-400" />, label: 'Real-Time' }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -3 }}
                className="flex flex-col items-center p-3 bg-gray-800/40 rounded-xl backdrop-blur-sm border border-gray-700/30"
              >
                <div className="mb-2 p-2 bg-gray-700/50 rounded-lg">
                  {feature.icon}
                </div>
                <div className="text-white text-sm font-medium">{feature.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right content - App mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative max-w-md mx-auto">
            {/* Main mockup */}
            <div className="relative bg-gray-800 rounded-2xl p-5 shadow-xl border border-gray-700/30">
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700/30">
                {/* Map area */}
                <div className="h-64 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 relative overflow-hidden">
                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  
                  {/* User location marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-400 rounded-full"
                      />
                      <div className="relative w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* App content */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="h-4 bg-gray-700 rounded-full w-32 mb-2"></div>
                      <div className="h-2 bg-gray-800 rounded-full w-24"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <FaCompass className="text-blue-400" />
                      </div>
                      <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center border border-green-500/30">
                        <FaShare className="text-green-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="h-10 bg-blue-600/20 rounded-xl w-32 border border-blue-500/30"></div>
                    <div className="h-2 bg-gray-800 rounded-full w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-400/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}