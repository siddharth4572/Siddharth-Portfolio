import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/mock';
import ThreeAvatar from './ThreeAvatar';

const Hero = ({ scrollY }) => {
  const parallaxY = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/40"
        style={{ transform: `translateY(${parallaxY}px)` }}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - 3D Avatar */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-96 lg:h-[500px]"
        >
          <ThreeAvatar />
          
          {/* Floating elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-400/30 flex items-center justify-center"
          >
            <span className="text-2xl">💻</span>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1 
            }}
            className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 flex items-center justify-center"
          >
            <span className="text-lg">⚡</span>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="space-y-8"
        >
          {/* Animated Heading */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-gray-300">Judges a book by its </span>
              <span className="relative">
                <TypeAnimation
                  sequence={[
                    'cover...',
                    2000,
                    'design...',
                    2000,
                    'code...',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
                />
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(168, 85, 247, 0.4)',
                      '0 0 40px rgba(236, 72, 153, 0.6)',
                      '0 0 20px rgba(168, 85, 247, 0.4)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl -z-10 rounded-lg"
                />
              </span>
            </motion.h1>
          </div>

          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
              Hi, I'm <span className="text-purple-400">{personalInfo.name}</span>. 
              <br />I'm a <span className="text-pink-400">{personalInfo.title}</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(168, 85, 247, 0.8)' 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-purple-400/50 rounded-xl text-purple-300 font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-8 pt-8"
          >
            {[
              { number: '15+', label: 'Projects' },
              { number: '2+', label: 'Years Experience' },
              { number: '5+', label: 'Technologies' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="text-2xl font-bold text-purple-400 group-hover:text-pink-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;