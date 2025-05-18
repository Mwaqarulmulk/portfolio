import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Project } from '../../types';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'web', name: 'Web Apps' },
    { id: 'ai', name: 'AI Projects' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Fiverr Clone AI Marketplace',
      description: 'A marketplace platform similar to Fiverr but focused on AI-powered services and automation tasks.',
      technologies: ['React', 'Node.js', 'Firebase', 'Stripe'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      githubUrl: 'https://github.com/mwaqarulmulk',
      featured: true,
      category: 'web',
    },
    {
      id: 2,
      title: 'Image Hider App with PIN Login',
      description: 'A Flutter mobile application that allows users to hide private images behind a secure PIN login system.',
      technologies: ['Flutter', 'Firebase Auth', 'Secure Storage'],
      image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=600',
      githubUrl: 'https://github.com/mwaqarulmulk',
      featured: true,
      category: 'mobile',
    },
    {
      id: 3,
      title: 'Restaurant App with Supabase',
      description: 'A full-stack restaurant management application with online ordering, reservations, and admin dashboard.',
      technologies: ['React', 'Supabase', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'https://bestdigitalagency.tech',
      githubUrl: 'https://github.com/mwaqarulmulk',
      featured: false,
      category: 'web',
    },
    {
      id: 4,
      title: 'AI YouTube Growth Bot',
      description: 'An automated bot that helps YouTube creators grow their channels through AI-powered engagement and analytics.',
      technologies: ['Python', 'Google API', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=600',
      githubUrl: 'https://github.com/mwaqarulmulk',
      featured: true,
      category: 'ai',
    },
    {
      id: 5,
      title: 'Handwriting Generator',
      description: 'A Python tool that converts typed text into realistic handwriting using machine learning algorithms.',
      technologies: ['Python', 'TensorFlow', 'OpenCV'],
      image: 'https://images.pexels.com/photos/261510/pexels-photo-261510.jpeg?auto=compress&cs=tinysrgb&w=600',
      githubUrl: 'https://github.com/mwaqarulmulk',
      featured: false,
      category: 'ai',
    },
    {
      id: 6,
      title: 'Image Compressor App',
      description: 'A Flutter application that compresses images while maintaining quality, perfect for saving storage space.',
      technologies: ['Flutter', 'Dart', 'Image Processing'],
      image: 'https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=600',
      githubUrl: 'https://github.com/mwaqarulmulk',
      featured: false,
      category: 'mobile',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Projects" 
          subtitle="Check out some of my recent work"
        />
        
        {/* Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow" hover={false}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {project.featured && (
                      <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg mt-2 transition-colors"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 md:h-80">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    {selectedProject.liveUrl && (
                      <Button 
                        variant="primary"
                        icon={<ExternalLink size={18} />}
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      >
                        View Live
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button 
                        variant="outline"
                        icon={<Github size={18} />}
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      >
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;