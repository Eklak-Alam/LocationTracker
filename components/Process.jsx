'use client';

import { FaCompass, FaMapMarkerAlt, FaShare, FaLink, FaEye, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      icon: <FaCompass className="text-2xl" />,
      title: "Initiate Tracking",
      description: "Click the 'Get My Location' button to start the tracking process. Your browser will request permission to access your location.",
      subpoints: [
        "Browser permission dialog appears",
        "High accuracy GPS enabled",
        "Instant location detection"
      ],
      color: "from-blue-600 to-cyan-500",
      borderColor: "border-blue-500/30"
    },
    {
      step: 2,
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location Processing",
      description: "Our system processes your coordinates using advanced algorithms and displays your precise location on an interactive map.",
      subpoints: [
        "Coordinates converted to address",
        "Real-time map rendering",
        "Accuracy assessment"
      ],
      color: "from-purple-600 to-pink-500",
      borderColor: "border-purple-500/30"
    },
    {
      step: 3,
      icon: <FaShare className="text-2xl" />,
      title: "Generate Share Link",
      description: "Create a secure, unique URL that contains your location data. This link can be shared with anyone you choose.",
      subpoints: [
        "Encrypted URL generation",
        "Optional expiration time",
        "One-click copying"
      ],
      color: "from-green-600 to-emerald-500",
      borderColor: "border-green-500/30"
    },
    {
      step: 4,
      icon: <FaLink className="text-2xl" />,
      title: "Share with Others",
      description: "Send the generated link via messaging apps, email, or any other method. Recipients can access it instantly.",
      subpoints: [
        "Cross-platform compatibility",
        "No login required",
        "Mobile-friendly design"
      ],
      color: "from-orange-600 to-amber-500",
      borderColor: "border-orange-500/30"
    },
    {
      step: 5,
      icon: <FaEye className="text-2xl" />,
      title: "Recipient Views Location",
      description: "When someone opens your link, they see your exact location on a map with clear markers and navigation options.",
      subpoints: [
        "Interactive map interface",
        "Distance calculation",
        "Navigation assistance"
      ],
      color: "from-red-600 to-rose-500",
      borderColor: "border-red-500/30"
    },
    {
      step: 6,
      icon: <FaCheckCircle className="text-2xl" />,
      title: "Mission Accomplished",
      description: "You've successfully shared your location! The process is complete and your recipient can find you easily.",
      subpoints: [
        "Success confirmation",
        "Optional follow-up actions",
        "Privacy maintained"
      ],
      color: "from-indigo-600 to-violet-500",
      borderColor: "border-indigo-500/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff10_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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
            Our seamless process makes location sharing simple, secure, and instant. 
            Follow these steps to share your location with anyone.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:col-start-2'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-6 w-6 h-6 rounded-full bg-gradient-to-r ${step.color} border-4 border-gray-900 hidden md:block ${
                  index % 2 === 0 ? 'md:-right-11' : 'md:-left-11'
                }`}></div>

                <div className={`bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border ${step.borderColor} group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full`}>
                  {/* Step number */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-4 text-white font-bold text-lg`}>
                    {step.step}
                  </div>

                  {/* Icon and title */}
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mr-4 text-white`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Subpoints */}
                  <ul className="space-y-2">
                    {step.subpoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-gray-400 text-sm">
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mt-2 mr-3`}></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gradient overlay effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Simple, Secure, and Efficient
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our location sharing process is designed with privacy and ease of use in mind. 
              No personal data is stored, and everything happens in real-time for maximum security.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stat: "100%", label: "Secure" },
                { stat: "Instant", label: "Sharing" },
                { stat: "0", label: "Data Stored" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{item.stat}</div>
                  <div className="text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}