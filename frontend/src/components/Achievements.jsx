import React from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/mock';
import { Trophy, Award, Calendar, ExternalLink, Medal, Zap } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="space-y-16">
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
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition and certifications that showcase my commitment to excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Competition Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <h3 className="text-3xl font-bold text-white">Competition Success</h3>
            </div>

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(255, 215, 0, 0.2)"
                }}
                className="bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-2xl" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                        {achievement.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <Medal className="w-5 h-5 text-yellow-400" />
                        <span className="text-lg font-semibold text-yellow-400">
                          {achievement.rank}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span className="font-medium text-purple-300">Project:</span>
                      <span className="text-gray-300">{achievement.project}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {achievement.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-400/30 group-hover:bg-yellow-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)"
                  }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 group cursor-pointer relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-xl" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-purple-300 font-medium">{cert.issuer}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-purple-300" />
                      </motion.button>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </div>
                      <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded">
                        ID: {cert.credentialId}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-400/30 group-hover:bg-purple-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Add More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl text-purple-300 font-medium hover:bg-purple-500/30 transition-all duration-300"
              >
                View All Certifications
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12"
        >
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-white">Achievement Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Trophy, number: '1', label: 'Competition Win', color: 'text-yellow-400' },
                { icon: Award, number: '2', label: 'Certifications', color: 'text-purple-400' },
                { icon: Medal, number: '10th', label: 'Rank Achieved', color: 'text-orange-400' },
                { icon: Zap, number: '100%', label: 'Completion Rate', color: 'text-green-400' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center group-hover:bg-gray-700/50 transition-colors">
                      <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;