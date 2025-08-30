'use client';

import { FaCompass, FaShare, FaMapMarkerAlt, FaLock, FaGlobe, FaMobile } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function ServicesSection() {
  const services = [
    {
      icon: <FaCompass className="text-3xl text-blue-400" />,
      title: "Precise Location Tracking",
      description: "Get accurate real-time location data using advanced geolocation technology with pinpoint accuracy."
    },
    {
      icon: <FaShare className="text-3xl text-green-400" />,
      title: "Instant Sharing",
      description: "Share your location with anyone through secure, time-sensitive links that work on any device."
    },
    {
      icon: <FaLock className="text-3xl text-purple-400" />,
      title: "Privacy First",
      description: "Your location data is never stored on our servers. Share only what you want, when you want."
    },
    {
      icon: <FaGlobe className="text-3xl text-cyan-400" />,
      title: "Global Coverage",
      description: "Works anywhere in the world with comprehensive map coverage and reliable location services."
    },
    {
      icon: <FaMobile className="text-3xl text-orange-400" />,
      title: "Mobile Optimized",
      description: "Perfectly designed for mobile devices with responsive design and touch-friendly interface."
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-red-400" />,
      title: "Real-time Updates",
      description: "Live location tracking with continuous updates and movement detection capabilities."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff10_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the comprehensive features that make our location tracker the perfect solution 
            for all your location sharing needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-2xl flex items-center justify-center mb-4 border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: <FaCompass className="text-2xl" />,
      title: "Get Your Location",
      description: "Click the track button to access your precise current location using your browser's geolocation API.",
      color: "from-blue-600 to-blue-400"
    },
    {
      step: "02",
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "View on Map",
      description: "See your location displayed on an interactive map with accurate positioning and detailed information.",
      color: "from-green-600 to-green-400"
    },
    {
      step: "03",
      icon: <FaShare className="text-2xl" />,
      title: "Share Instantly",
      description: "Generate a secure link to share your location with anyone. No account or download required.",
      color: "from-purple-600 to-purple-400"
    }
  ];

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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff10_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Works</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Getting started with our location tracker is simple and straightforward. 
            Follow these three easy steps to begin sharing your location.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-3/4 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-green-500 z-0"></div>
              )}

              <div className="relative z-10 bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 h-full group hover:border-blue-500/30 transition-all duration-300">
                {/* Step number */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mt-2 text-white`}>
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Animated border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of users who trust our location tracker for their daily needs. 
              No signup required, no personal data collected.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Start Tracking Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}