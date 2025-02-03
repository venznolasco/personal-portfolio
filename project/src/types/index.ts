export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  duration: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  certificateUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: 'beginner' | 'intermediate' | 'advanced';
}