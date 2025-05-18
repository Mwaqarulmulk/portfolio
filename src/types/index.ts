export type ThemeMode = 'light' | 'dark';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}