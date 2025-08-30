'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <span className="font-bold text-2xl">LocationTracker</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Track and share your location with ease. Our advanced technology ensures accurate and reliable location services.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://github.com/Eklak-Alam"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.linkedin.com/in/eklak-alam-40ba632b5/"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://x.com/dev_eklak"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.instagram.com/eklak__alam/"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Tracker', 'About', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Support
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3">
              {['Help Center', 'FAQ', 'Privacy Policy', 'Terms of Service', 'Documentation'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Location Street, City, Country</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <FaPhone className="text-blue-500 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <FaEnvelope className="text-blue-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@locationtracker.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  info@locationtracker.com
                </a>
              </motion.div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center"
          >
            © {currentYear} LocationTracker. Made with <FaHeart className="text-red-500 mx-1" /> by Eklak Alam
          </motion.p>
          
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                href="#"
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-40"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
}