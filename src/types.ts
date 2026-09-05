export interface NavItem {
  name: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  category: 'AI/ML' | 'Web Development' | 'Data Science' | 'Full Stack';
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  duration: string;
  location: string;
  college: string;
  status: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  certificateUrl: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  heroDescription: string;
  aboutText: string[];
  email: string;
  phone: string;
  location: string;
  githubPlaceholder: string;
  linkedinPlaceholder: string;
  resumeFileName: string;
}
