import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, GraduationCap, Briefcase } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Card from '../ui/Card';

const ResumeSection: React.FC = () => {
  const experiences = [
    {
      title: 'Founder',
      company: 'BestDigitalAgency.tech',
      period: '2022 - Present',
      description: 'Founded a digital agency focused on AI automation, web development, and digital marketing services.',
    },
    {
      title: 'Freelance Developer',
      company: 'Various Clients',
      period: '2021 - Present',
      description: 'Developed custom web and mobile applications for clients across various industries.',
    },
  ];

  const educations = [
    {
      degree: 'BS Software Engineering',
      institution: 'COMSATS University Lahore',
      period: '2022 - 2026 (Expected)',
      description: '6 semesters completed with focus on software development, algorithms, and AI.',
    },
  ];

  const certifications = [
    {
      title: 'Full-Stack Web Development',
      issuer: 'Udemy',
      date: '2022',
    },
    {
      title: 'Flutter Development',
      issuer: 'Coursera',
      date: '2022',
    },
    {
      title: 'AI Prompt Engineering',
      issuer: 'OpenAI',
      date: '2023',
    },
    {
      title: 'Firebase Authentication & Security',
      issuer: 'Google',
      date: '2023',
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/public/resume.pdf'; // Path to your resume file
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('download', 'resume.pdf');
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Resume" 
          subtitle="A summary of my education, experience, and certifications"
        />
        
        <div className="text-center mb-16">
          <Button 
            variant="outline" 
            size="lg"
            icon={<Download size={18} />}
            onClick={handleDownloadResume}
          >
            Download Resume
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Briefcase className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 relative border-l-4 border-blue-500"
                  delay={index}
                >
                  <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-blue-500 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education & Certifications Column */}
          <div>
            {/* Education */}
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </motion.div>
            
            <div className="space-y-6 mb-12">
              {educations.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 relative border-l-4 border-blue-500"
                  delay={index}
                >
                  <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-500 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </Card>
              ))}
            </div>
            
            {/* Certifications */}
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Award className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-4"
                  delay={index}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {cert.date}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;