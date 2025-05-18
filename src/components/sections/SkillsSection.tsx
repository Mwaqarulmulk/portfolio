import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, PenTool as Tool, Brain } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { Skill } from '../../types';

const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <Code /> },
    { id: 'frontend', name: 'Frontend', icon: <Code /> },
    { id: 'backend', name: 'Backend', icon: <Server /> },
    { id: 'tools', name: 'Tools', icon: <Tool /> },
    { id: 'ai', name: 'AI & Automation', icon: <Brain /> },
  ];

  const skills: Skill[] = [
    { name: 'Flutter', icon: '📱', level: 90, category: 'frontend' },
    { name: 'React', icon: '⚛️', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🎨', level: 90, category: 'frontend' },
    { name: 'Firebase', icon: '🔥', level: 90, category: 'backend' },
    { name: 'Supabase', icon: '⚡', level: 85, category: 'backend' },
    { name: 'Python', icon: '🐍', level: 80, category: 'backend' },
    { name: 'REST API', icon: '🔄', level: 85, category: 'backend' },
    { name: 'AI Agents', icon: '🤖', level: 95, category: 'ai' },
    { name: 'Prompt Engineering', icon: '✨', level: 90, category: 'ai' },
    { name: 'GPT Integration', icon: '🧠', level: 95, category: 'ai' },
    { name: 'GitHub', icon: '🐙', level: 80, category: 'tools' },
    { name: 'Web Scraping', icon: '🕸️', level: 85, category: 'tools' },
    { name: 'Data Mining', icon: '⛏️', level: 80, category: 'tools' },
    { name: 'Zapier', icon: '⚡', level: 90, category: 'tools' },
    { name: 'Make.com', icon: '🔧', level: 90, category: 'tools' },
    { name: 'SEO', icon: '🔍', level: 75, category: 'tools' },
    { name: 'Figma', icon: '🎨', level: 70, category: 'tools' },
    { name: 'Framer Motion', icon: '🎬', level: 75, category: 'frontend' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies and tools I work with"
        />
        
        {/* Skill Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <Card key={skill.name} className="p-6" delay={index}>
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                />
              </div>
              
              <div className="flex justify-end mt-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {skill.level}%
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;