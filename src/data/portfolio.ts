import {
  NavItem,
  SkillCategory,
  ProjectItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
  PersonalInfo,
} from '../types.ts';

// Configurable placeholders for links - easily updated by the user
export const SOCIAL_LINKS = {
  github: 'https://github.com/your-username-placeholder', // Replace with your actual GitHub profile URL
  linkedin: 'https://linkedin.com/in/your-username-placeholder', // Replace with your actual LinkedIn profile URL
};

export const PROJECT_LINKS = {
  GITHUB_PROJECT_1: 'https://github.com/your-username/brain-tumor-detection',
  LIVE_DEMO_PROJECT_1: '', // Optional live link
  GITHUB_PROJECT_2: 'https://github.com/your-username/heart-disease-agent',
  LIVE_DEMO_PROJECT_2: '',
  GITHUB_PROJECT_3: 'https://github.com/your-username/women-safety-safe-haven',
  LIVE_DEMO_PROJECT_3: '',
  GITHUB_PROJECT_4: 'https://github.com/your-username/demand-prediction-system',
  LIVE_DEMO_PROJECT_4: '',
  GITHUB_PROJECT_5: 'https://github.com/your-username/ai-interview-practice',
  LIVE_DEMO_PROJECT_5: '',
  GITHUB_PROJECT_6: 'https://github.com/your-username/content-creation-platform',
  LIVE_DEMO_PROJECT_6: '',
};

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Bharath Kumar Angirekula',
  role: 'Software Engineer',
  tagline: 'Software Engineer | Python Developer | AI/ML Enthusiast',
  heroDescription:
    'I am a B.Tech student passionate about software development, artificial intelligence, machine learning, and building practical solutions for real-world problems.',
  aboutText: [
    'I am Bharath Kumar Angirekula, a B.Tech student and aspiring Software Engineer. I am interested in Python development, Artificial Intelligence, Machine Learning, and software development.',
    'I enjoy participating in hackathons and developing projects that address real-world problems. Through these experiences, I have developed my programming, problem-solving, teamwork, and project development skills.',
    'I am continuously learning new technologies and looking for opportunities to apply my skills in practical projects.',
  ],
  email: 'bharathkumarangirekula@gmail.com',
  phone: '9391920174',
  location: 'India',
  githubPlaceholder: SOCIAL_LINKS.github,
  linkedinPlaceholder: SOCIAL_LINKS.linkedin,
  resumeFileName: 'Bharath_Kumar_Resume.pdf',
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const ABOUT_HIGHLIGHTS = [
  {
    icon: 'GraduationCap',
    title: 'B.Tech Student',
    description: 'Pursuing Computer Science & Engineering (2024 - 2028)',
  },
  {
    icon: 'Code2',
    title: 'Software Development',
    description: 'Building responsive applications, robust APIs, and clean systems',
  },
  {
    icon: 'Bot',
    title: 'AI & Machine Learning',
    description: 'Passionate about predictive modeling, deep learning & AI agents',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    iconName: 'Terminal',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    iconName: 'Cpu',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Scikit-learn' },
    ],
  },
  {
    title: 'Development',
    iconName: 'Layout',
    skills: [
      { name: 'React' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'Node.js' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Google Colab' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'brain-tumor-detection',
    title: 'Brain Tumor Detection',
    description:
      'An AI/ML-based project designed to analyze brain MRI images and assist in detecting brain tumor patterns.',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'Image Processing'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_1,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_1,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'heart-disease-risk-agent',
    title: 'Heart Disease Risk Assessment Agent',
    description:
      'An AI-powered health risk assessment project that analyzes input data and provides a risk assessment with useful recommendations.',
    technologies: ['Python', 'Machine Learning', 'AI Agent', 'Streamlit'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_2,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_2,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'women-safety-safe-haven',
    title: 'Women Safety - Safe Haven App',
    description:
      'A technology-based safety application designed to provide useful safety features and emergency assistance for users.',
    technologies: ['React', 'JavaScript', 'Firebase', 'HTML/CSS'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_3,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_3,
    category: 'Web Development',
    featured: true,
  },
  {
    id: 'demand-prediction-system',
    title: 'Demand Prediction System',
    description:
      'A machine learning project for predicting future product demand using historical sales data.',
    technologies: ['Python', 'Pandas', 'Machine Learning', 'Regression', 'Forecasting'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_4,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_4,
    category: 'Data Science',
    featured: false,
  },
  {
    id: 'ai-interview-practice',
    title: 'AI Interview Practice Platform',
    description:
      'An AI-powered platform that helps students practice interviews, improve communication, and build confidence before real interviews.',
    technologies: ['React', 'AI', 'JavaScript', 'Firebase'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_5,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_5,
    category: 'Full Stack',
    featured: false,
  },
  {
    id: 'content-creation-platform',
    title: 'Content Creation Platform',
    description:
      'A web-based platform designed to assist users in creating and managing digital content.',
    technologies: ['React', 'TypeScript', 'AI', 'Firebase'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_6,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_6,
    category: 'Web Development',
    featured: false,
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'B.Tech',
  duration: '2024 - 2028',
  location: 'Vijayawada, India',
  college: 'College Name — Add your college name',
  status: 'Currently pursuing B.Tech',
  description:
    'Pursuing undergraduate engineering curriculum with a focus on Computer Science, algorithm design, software engineering methodologies, artificial intelligence, and applied machine learning.',
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'Certification 1',
    issuer: 'Issuing Organization',
    year: '2024 - 2025',
    certificateUrl: '#',
  },
  {
    id: 'cert-2',
    name: 'Certification 2',
    issuer: 'Issuing Organization',
    year: '2024 - 2025',
    certificateUrl: '#',
  },
  {
    id: 'cert-3',
    name: 'Certification 3',
    issuer: 'Issuing Organization',
    year: '2024 - 2025',
    certificateUrl: '#',
  },
  {
    id: 'cert-4',
    name: 'Certification 4',
    issuer: 'Issuing Organization',
    year: '2024 - 2025',
    certificateUrl: '#',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Hackathon Participation',
    description:
      'Participated in multiple hackathons and worked on technology-based solutions for real-world problem statements.',
    iconName: 'Trophy',
  },
  {
    id: 'ach-2',
    title: 'Project Development',
    description:
      'Developed multiple projects involving AI, machine learning, software development, and web technologies.',
    iconName: 'Rocket',
  },
  {
    id: 'ach-3',
    title: 'Continuous Learning',
    description:
      'Continuously improving programming, development, AI, and machine learning skills through practical projects and certifications.',
    iconName: 'TrendingUp',
  },
];
