import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { ContactFormData } from '../../types';
import { supabase } from '../../lib/supabaseClient';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      // Send form data to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        ]);
      
      if (error) throw error;
      
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitResult({
        success: false,
        message: 'There was an error sending your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const contactInfo = [
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: 'Phone', 
      value: '+92 301 0492137',
      link: 'tel:+923010492137' 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      value: 'mwaqarulmulk@gmail.com',
      link: 'mailto:mwaqarulmulk@gmail.com' 
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: 'Location', 
      value: 'Lahore, Pakistan',
      link: 'https://maps.google.com/?q=Lahore,Pakistan' 
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's work together!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Send me a message
              </h3>
              
              {submitResult && (
                <div 
                  className={`p-4 mb-6 rounded-lg ${
                    submitResult.success
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                  }`}
                >
                  {submitResult.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Hello, I'd like to discuss a project..."
                  ></textarea>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
          
          {/* Contact Info */}
          <div>
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {info.label}
                      </h4>
                      <a 
                        href={info.link} 
                        className="text-gray-900 dark:text-white font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Let's work together
              </h3>
              <p className="mb-6 opacity-90">
                I'm open to freelance opportunities, full-time positions, and interesting projects.
                Let's build something amazing together!
              </p>
              <Button 
                variant="outline" 
                className="bg-white/20 backdrop-blur-sm border-white/50 hover:bg-white/30"
                onClick={() => window.open('https://bestdigitalagency.tech', '_blank')}
              >
                Visit My Agency
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;