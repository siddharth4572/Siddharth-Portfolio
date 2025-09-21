import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/mock';
import { 
  Code2, 
  Palette, 
  Database, 
  Brain, 
  Settings,
  Star,
  ChevronRight
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');

  const categoryIcons = {
    'Programming Languages': Code2,
    'Frontend Development': Palette,
    'Backend & Database': Database,
    'AI/ML & Data Science': Brain,
    'Tools & Technologies': Settings
  };

  const skillCategories = Object.keys(skills);

  const getSkillLevel = (level) => {
    if (level >= 90) return { color: 'from-emerald-500 to-green-400', label: 'Expert' };
    if (level >= 75) return { color: 'from-blue-500 to-cyan-400', label: 'Advanced' };
    if (level >= 60) return { color: 'from-purple-500 to-pink-400', label: 'Intermediate' };
    return { color: 'from-yellow-500 to-orange-400', label: 'Learning' };
  };

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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Interface */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Categories</h3>
            <div className="space-y-2">
              {skillCategories.map((category, index) => {
                const IconComponent = categoryIcons[category];
                const isActive = activeCategory === category;
                
                return (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 text-white' 
                        : 'bg-gray-900/50 border border-gray-700/30 text-gray-300 hover:text-white hover:border-purple-500/30'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      isActive ? 'bg-purple-500/30' : 'bg-gray-700/50'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-medium flex-1">{category}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'rotate-90 text-purple-400' : 'text-gray-500'
                    }`} />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                {React.createElement(categoryIcons[activeCategory], { 
                  className: "w-8 h-8 text-purple-400" 
                })}
                <h3 className="text-3xl font-bold text-white">{activeCategory}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skills[activeCategory].map((skill, index) => {
                  const levelInfo = getSkillLevel(skill.level);
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 10px 30px rgba(168, 85, 247, 0.15)"
                      }}
                      className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">{levelInfo.label}</span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star
                                key={starIndex}
                                className={`w-3 h-3 ${
                                  starIndex < Math.floor(skill.level / 20) 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${levelInfo.color} rounded-full relative`}
                          >
                            <motion.div
                              animate={{ 
                                boxShadow: [
                                  `0 0 10px rgba(168, 85, 247, 0.3)`,
                                  `0 0 20px rgba(236, 72, 153, 0.4)`,
                                  `0 0 10px rgba(168, 85, 247, 0.3)`,
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 rounded-full"
                            />
                          </motion.div>
                        </div>
                        <span className="absolute right-2 -top-6 text-sm font-semibold text-purple-300">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interactive Skills Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12"
        >
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-white">Technical Proficiency</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { category: 'Frontend', percentage: 90, color: 'from-blue-500 to-cyan-400' },
                { category: 'Backend', percentage: 85, color: 'from-green-500 to-emerald-400' },
                { category: 'AI/ML', percentage: 75, color: 'from-purple-500 to-pink-400' },
                { category: 'DevOps', percentage: 70, color: 'from-orange-500 to-red-400' },
              ].map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-24 h-24 mx-auto relative">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        stroke="rgba(75, 85, 99, 0.3)"
                        strokeWidth="6"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className={`stroke-current bg-gradient-to-r ${item.color}`}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: item.percentage / 100 }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        style={{
                          strokeDasharray: '251.2',
                          strokeDashoffset: '251.2',
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{item.percentage}%</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-white">{item.category}</h4>
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

export default Skills;