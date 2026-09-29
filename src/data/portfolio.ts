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
  github: 'https://github.com/your-username-placeholder',
  linkedin: 'https://www.linkedin.com/in/bharath-kumar-angirekula',
};

export const PROJECT_LINKS = {
  GITHUB_PROJECT_1: 'https://github.com/your-username/fraud-email-detection',
  LIVE_DEMO_PROJECT_1: '',
  GITHUB_PROJECT_2: 'https://github.com/your-username/Resume-Scoring-System',
  LIVE_DEMO_PROJECT_2: '',
  GITHUB_PROJECT_3: 'https://github.com/your-username/brain-tumor-detection',
  LIVE_DEMO_PROJECT_3: '',
  GITHUB_PROJECT_4: 'https://github.com/your-username/heart-disease-risk-assessment',
  LIVE_DEMO_PROJECT_4: '',
  GITHUB_PROJECT_5: 'https://github.com/your-username/kidney-disease-prediction',
  LIVE_DEMO_PROJECT_5: '',
  GITHUB_PROJECT_6: 'https://github.com/your-username/customer-churn-prediction',
  LIVE_DEMO_PROJECT_6: '',
};

export const PERSONAL_INFO: PersonalInfo = {
  name: 'ANGIREKULA BHARATH KUMAR',
  role: 'Python Developer | AI/ML Engineer | Java Developer',
  tagline: 'Python Developer | AI/ML Engineer | Java Developer',
  heroDescription:
    'Computer Science student with hands-on experience in Python, Machine Learning, Deep Learning, SQL, and application development. Skilled in building ML models and deploying practical applications using Scikit-learn, TensorFlow, Streamlit, and FastAPI.',
  aboutText: [
    'Computer Science student with hands-on experience in Python, Machine Learning, Deep Learning, SQL, and application development. Skilled in building ML models and developing practical applications using Scikit-learn, TensorFlow, Streamlit, and FastAPI.',
    'I enjoy solving real-world problems through technology and have built projects focused on fraud detection, disease prediction, and AI-powered decision systems. I am passionate about creating impactful digital solutions and expanding my skills in software engineering and AI.',
    'I am actively seeking opportunities to grow as a software engineer and AI/ML developer while contributing to meaningful projects and team-driven work.',
  ],
  email: 'bharathkumarangirekula@gmail.com',
  phone: '9391920174',
  location: 'Mylavaram, Andhra Pradesh',
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
    title: 'Programming Languages',
    iconName: 'Terminal',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'JavaScript' },
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
      { name: 'Scikit-learn' },
      { name: 'TensorFlow' },
      { name: 'Pandas' },
      { name: 'NumPy' },
    ],
  },
  {
    title: 'Development',
    iconName: 'Layout',
    skills: [
      { name: 'Streamlit' },
      { name: 'FastAPI' },
      { name: 'React' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Tools & Platforms',
    iconName: 'Wrench',
    skills: [
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Google Colab' },
      { name: 'Git' },
      { name: 'PostgreSQL' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'fraud-email-detection',
    title: 'Fraud Email Detection System',
    description:
      'Built and deployed a machine learning model to classify emails as fraudulent or legitimate using Python and Scikit-learn.',
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Email Classification'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_1,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_1,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'resume-screening-system',
    title: 'Resume Screening System',
    description:
      'Developed and deployed an application to screen and evaluate resumes using machine learning techniques.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'Streamlit'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_2,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_2,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'brain-tumor-detection',
    title: 'Brain Tumor Detection',
    description:
      'Built and deployed a deep learning model to detect brain tumors, delivered as an interactive Streamlit application.',
    technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Image Processing'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_3,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_3,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    description:
      'Developed a machine learning model to predict customer churn and deployed it as a live Streamlit application.',
    technologies: ['Python', 'Machine Learning', 'Churn Analysis', 'Streamlit'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_6,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_6,
    category: 'Data Science',
    featured: false,
  },
  {
    id: 'heart-disease-risk-assessment',
    title: 'Heart Disease Risk Assessment',
    description:
      'Designed and deployed a machine learning model to assess heart disease risk through a Streamlit web interface.',
    technologies: ['Python', 'Machine Learning', 'Healthcare AI', 'Streamlit'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_4,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_4,
    category: 'Healthcare AI',
    featured: false,
  },
  {
    id: 'kidney-disease-prediction',
    title: 'Kidney Disease Prediction',
    description:
      'Built and deployed a machine learning model to predict kidney disease, made accessible via a live Streamlit app.',
    technologies: ['Python', 'Machine Learning', 'Healthcare AI', 'Streamlit'],
    githubUrl: PROJECT_LINKS.GITHUB_PROJECT_5,
    liveDemoUrl: PROJECT_LINKS.LIVE_DEMO_PROJECT_5,
    category: 'Healthcare AI',
    featured: false,
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech)',
  duration: 'Currently Pursuing',
  location: 'Mylavaram, Andhra Pradesh',
  college: 'Vijayawada, India',
  status: 'Currently Pursuing',
  description:
    'Bachelor of Technology in Computer Science with a focus on software engineering, data structures, artificial intelligence, and machine learning.',
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  { id: 'cert-1', name: 'HP LIFE', issuer: 'HP LIFE', year: '2024', certificateUrl: '#' },
  { id: 'cert-2', name: 'NPTEL', issuer: 'NPTEL', year: '2024', certificateUrl: '#' },
  { id: 'cert-3', name: 'Simplilearn SkillUp', issuer: 'Simplilearn', year: '2024', certificateUrl: '#' },
  { id: 'cert-4', name: 'HCL', issuer: 'HCL', year: '2024', certificateUrl: '#' },
  { id: 'cert-5', name: 'Salesforce', issuer: 'Salesforce', year: '2024', certificateUrl: '#' },
  { id: 'cert-6', name: 'IBM', issuer: 'IBM', year: '2024', certificateUrl: '#' },
  { id: 'cert-7', name: 'AWS', issuer: 'AWS', year: '2024', certificateUrl: '#' },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Hackathon Participation',
    description:
      'Participated in multiple hackathons; reached the finalist round at VIT-AP University.',
    iconName: 'Trophy',
  },
  {
    id: 'ach-2',
    title: 'Project Development',
    description:
      'Developed multiple machine learning and software projects focused on real-world problem solving and practical deployment.',
    iconName: 'Rocket',
  },
  {
    id: 'ach-3',
    title: 'Continuous Learning',
    description:
      'Constantly improving through hands-on learning, certifications, and building AI-driven applications.',
    iconName: 'TrendingUp',
  },
];
