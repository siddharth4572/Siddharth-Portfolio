import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/mock';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Zap
} from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      handle: personalInfo.email,
      color: 'from-red-500 to-pink-500',
      description: 'Send me an email'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
      handle: `@${personalInfo.github.split('/').pop()}`,
      color: 'from-gray-700 to-gray-900',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
      handle: 'Connect with me',
      color: 'from-blue-600 to-blue-800',
      description: 'Professional network'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: personalInfo.instagram,
      handle: 'Follow my journey',
      color: 'from-purple-500 to-pink-500',
      description: 'Behind the scenes'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-300 max-w-xl mx-auto">
            Have a question or want to work together? Drop me a line.
          </p>
        </motion.div>

        {/* Right Column is now Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Intro text */}
          <div className="space-y-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Get in Touch</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white text-center">Connect With Me</h4>
            <div className="grid gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-gray-900/80 to-gray-800/40 
                             backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl 
                             hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className={`p-2 sm:p-3 rounded-md sm:rounded-lg bg-gradient-to-r ${social.color} 
                                  group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-white text-sm sm:text-base group-hover:text-purple-300 transition-colors">
                      {social.name}
                    </h5>
                    <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors">
                      {social.description}
                    </p>
                    <p className="text-purple-300 text-xs sm:text-sm">{social.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm 
                       border border-purple-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3"
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              <h4 className="text-lg sm:text-xl font-bold text-white">Quick Response</h4>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              I typically respond to messages within 24 hours. For urgent inquiries, 
              feel free to reach out via email directly.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-300">
              <MapPin className="w-4 h-4" />
              <span>Available for remote work worldwide</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pt-10 border-t border-gray-800"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 {personalInfo.name}. Built with React, Framer Motion, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
