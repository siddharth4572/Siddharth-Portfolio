import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/mock';
import { ExternalLink, Github, Zap, Clock, Award } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Live': return <Zap className="w-4 h-4" />;
      case 'In Progress': return <Clock className="w-4 h-4" />;
      case 'Research': return <Award className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'from-green-500 to-emerald-500';
      case 'In Progress': return 'from-yellow-500 to-orange-500';
      case 'Research': return 'from-blue-500 to-purple-500';
      default: return 'from-purple-500 to-pink-500';
    }
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover my latest work in web development, AI/ML, and innovative digital solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex flex-wrap gap-3 p-2 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-purple-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  layout: { duration: 0.3 }
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} rounded-full text-white text-sm font-semibold`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0 
                      }}
                      className="absolute inset-0 bg-purple-900/80 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      {project.demoUrl && project.demoUrl !== '#' && (
                        <motion.a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </motion.a>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-6 h-6 text-white" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30 group-hover:bg-purple-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-sm">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-1">
                          {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                            <div 
                              key={hIndex}
                              className="flex items-center gap-1 text-xs text-pink-300"
                            >
                              <Zap className="w-3 h-3" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h3 className="text-2xl font-bold text-white">
            Have a project in mind?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always excited to work on new and challenging projects. Let's discuss how we can bring your ideas to life.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)' 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;