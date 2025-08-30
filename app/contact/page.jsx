'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, 
  Globe, Send, Calendar, MessageSquare, User, Award, Briefcase 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus(''), 3000);
  };

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Eklak-Alam',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/eklak-alam-40ba632b5/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://x.com/dev_eklak',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/eklak__alam/',
      color: 'hover:text-pink-400'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'eklakalam420@gmail.com.com',
      link: 'mailto:eklakalam420@gmail.com.com'
    },
    {
      icon: <Phone size={22} />,
      label: 'Phone',
      value: '+91 9473384492',
      link: 'tel:+919473384492'
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Chapra, Bihar, India',
      link: '/'
    },
    {
      icon: <Globe size={22} />,
      label: 'Portfolio',
      value: 'Eklak Portfolio',
      link: 'https://eklak.vercel.app/'
    }
  ];

  const skills = [
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'CSS/Tailwind', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 pt-28 lg:pt-44">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info & Socials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-8"
          >
            {/* Personal Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-xl"
            >
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
                >
                  <User size={40} className="text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold">Your Name</h2>
                <p className="text-blue-400">Frontend Developer</p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300"
                  >
                    <div className="text-blue-400">{item.icon}</div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-blue-400" />
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                    <span className="text-xs mt-1">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award size={20} className="text-blue-400" />
                Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/30 shadow-xl">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Send size={24} className="text-blue-400" />
                Send Message
              </h2>
              <p className="text-gray-400 mb-6">
                Have a question or want to work together? I'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-3 text-gray-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-3 text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <Briefcase size={18} className="absolute left-3 top-3 text-gray-500" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700/30 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-blue-400" />
                  <span className="font-semibold">Current Availability</span>
                </div>
              </div>
              <p className="text-gray-300 mt-2">
                I'm currently available for freelance projects and full-time opportunities. 
                Feel free to reach out and let's discuss how I can help bring your ideas to life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}