import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '../ThemeProvider';
import Preloader from '../animations/Preloader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
        <Preloader />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;