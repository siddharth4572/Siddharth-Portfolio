import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/mock';
import { Code, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Code,
      value: "15+",
      label: "Projects Completed",
      description: "From web apps to AI models"
    },
    {
      icon: Zap,
      value: "2+",
      label: "Years Experience",
      description: "Building digital solutions"
    },
    {
      icon: Users,
      value: "10+",
      label: "Collaborations",
      description: "Team projects & hackathons"
    },
    {
      icon: Award,
      value: "Top 10",
      label: "Competition Rank",
      description: "Grap-E-Thon Achievement"
    }
  ];

  const expertise = [
    {
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern frameworks and technologies.",
      technologies: ["React", "Node.js", "Python", "PostgreSQL"]
    },
    {
      title: "AI & Machine Learning",
      description: "Developing intelligent systems using deep learning and computer vision.",
      technologies: ["TensorFlow", "Keras", "Python", "CNN"]
    },
    {
      title: "Cloud & DevOps",
      description: "Deploying scalable applications with cloud services and automation.",
      technologies: ["AWS", "Git", "CI/CD", "Docker"]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="space-y-20">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)"
              }}
              className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-purple-300 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <img 
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full max-w-sm mx-auto lg:mx-0 rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl" />
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 40px rgba(168, 85, 247, 0.3)',
                    '0 0 60px rgba(236, 72, 153, 0.4)',
                    '0 0 40px rgba(168, 85, 247, 0.3)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in the power of technology to solve real-world problems and create 
                meaningful experiences. Whether it's building intelligent chatbots, developing 
                real-time applications, or exploring the depths of machine learning, I'm always 
                excited to take on new challenges.
              </p>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </div>

        {/* Expertise Areas */}
        <div className="space-y-12">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white"
          >
            Areas of Expertise
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)"
                }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 group cursor-pointer"
              >
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {area.title}
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30 group-hover:bg-purple-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;