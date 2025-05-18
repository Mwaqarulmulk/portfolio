import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ResumeSection from './components/sections/ResumeSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Muhammad Waqar Ul Mulk | Software Engineer & AI Expert";
    
    // Scroll to hash on load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </Layout>
  );
}

export default App;