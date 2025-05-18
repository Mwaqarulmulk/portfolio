import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const AboutSection: React.FC = () => {
  const profileImage = 'https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/499689284_713150777814844_195335009404258128_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE5XD5RdOPlOfCxBGXSymZZPkOfHlgaOAk-Q58eWBo4CS--w5157JHGdLmZD3y3kWroperM7Ag2hz1PtY1As_SZ&_nc_ohc=C2NznuQzMloQ7kNvwFhZR8T&_nc_oc=AdlG2X3ukPjX0k9c4OHn-k8-WqLZaRKGOJcjBk8bWX7hbLB1zkEgydScp0Ua575vzuM&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=EHYJsP5ryVZv6bGoE4j9ww&oh=00_AfItWJfmq7Zn2i_J0UCCkDKFT88RIl13IGus5jkDv6qLSw&oe=682F7DA5';

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about me and my background"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full h-full absolute -top-4 -left-4 border-2 border-blue-500 rounded-2xl"></div>
              <img 
                src={profileImage} 
                alt="Muhammad Waqar Ul Mulk" 
                className="w-full h-auto rounded-2xl shadow-lg relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 shadow-lg text-white">
                <Briefcase className="w-6 h-6" />
                <span className="block mt-1 font-bold">3+ Years</span>
                <span className="text-sm">Experience</span>
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Software Engineer & AI Automation Expert
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Passionate software engineer building AI-powered tools, full-stack platforms, and automation bots. 
                Founder of BestDigitalAgency.tech. I love building functional, fast, and beautiful software that 
                solves real-world problems.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                  <span>Lahore, Pakistan</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-blue-500" />
                  <span>+92 301 0492137</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-500" />
                  <span>mwaqarulmulk@gmail.com</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <GraduationCap className="w-5 h-5 mr-3 text-blue-500" />
                  <span>BS Software Engineering, COMSATS University Lahore</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Education
              </h4>
              
              <Card className="p-6 mb-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-10 h-10 p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white">
                      BS Software Engineering
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">COMSATS University Lahore</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      2022 - 2026 (Expected)
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Gained practical skills in software engineering , focusing on building scalable applications using AI, algorithms and modern development frameworks.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
