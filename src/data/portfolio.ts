import {
  NavItem,
  SkillCategory,
  ProjectItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
  PersonalInfo,
} from '../types.ts';

// Configurable social links and repositories
export const SOCIAL_LINKS = {
  github: 'https://github.com/bharathkumarangirekula-png',
  linkedin: 'https://www.linkedin.com/in/bharath-kumar-angirekula-8a2728362/',
};

export const PROJECT_LINKS = {
  // Direct GitHub Repositories
  FRAUD_EMAIL: 'https://github.com/bharathkumarangirekula-png/Fraud-Email-Classifier',
  FRAUD_EMAIL_LIVE: 'https://fraud-email-classifier.vercel.app/',
  
  RESUME_SCREENING: 'https://github.com/bharathkumarangirekula-png/resume-screening-system',
  RESUME_SCREENING_LIVE: 'https://resume-screening-system-pi-nine.vercel.app/',
  
  BRAIN_TUMOR: 'https://github.com/bharathkumarangirekula-png/brain-Tumor',
  BRAIN_TUMOR_LIVE: 'https://brain-tumor-3tltrwfrhmxpyaprejxepx.streamlit.app/',
  
  HEART_DISEASE: 'https://github.com/bharathkumarangirekula-png/Heart-Disease-Risk-Assesment',
  HEART_DISEASE_LIVE: 'https://bharathkumarangirekula-png-kaq2yphfua6rmjksantenm.streamlit.app/',
  
  KIDNEY_DISEASE: 'https://github.com/bharathkumarangirekula-png/kidney-disease',
  KIDNEY_DISEASE_LIVE: 'https://kidney-disease-3kouwnhtcm9yjv5f9swksv.streamlit.app/',
  
  CUSTOMER_CHURN: 'https://github.com/bharathkumarangirekula-png/customer-churn-prediction',
  CUSTOMER_CHURN_LIVE: 'https://customer-churn-prediction-pjph5be4whpysa7daxqbud.streamlit.app/',
  
  GENUINE_AI: 'https://github.com/bharathkumarangirekula-png/GENUINE-AI1',
  GENUINE_AI_LIVE: 'https://genuine-ai-1.vercel.app',
  
  CONTENT_CREATION: 'https://github.com/bharathkumarangirekula-png/CONTENT-CREATION',
  CONTENT_CREATION_LIVE: 'https://smartcontentmaker.vercel.app',
  
  PORTFOLIO: 'https://github.com/bharathkumarangirekula-png/portfolio',
  PORTFOLIO_LIVE: 'https://portfolio-omega-mauve-tovgw0e3vy.vercel.app',
  
  RYTHU_REPORT: 'https://github.com/bharathkumarangirekula-png/Rythu-Report',
  TRENDPULSE: 'https://github.com/bharathkumarangirekula-png/trendpulse-bharath',
  CONFIDENCE_BUILDER: 'https://github.com/bharathkumarangirekula-png/confidence-Builder',
  CONFIDENT_AI: 'https://github.com/bharathkumarangirekula-png/confident-',
  VENDOR_INTELLIGENCE: 'https://github.com/bharathkumarangirekula-png/Vendor-Reliability-Intelligence-Platform',
  SLEEP_HEALTH: 'https://github.com/bharathkumarangirekula-png/Sleep-Health-Assistant',
  HEART_AGENT: 'https://github.com/bharathkumarangirekula-png/Heart-Disease-Risk-Assessment-Agent',
  FAKE_PRODUCT: 'https://github.com/bharathkumarangirekula-png/pandu123',
};

export const PERSONAL_INFO: PersonalInfo = {
  name: 'ANGIREKULA BHARATH KUMAR',
  role: 'Python Developer | AI/ML Engineer | Java Developer',
  tagline: 'Python Developer | AI/ML Engineer | Java Developer',
  heroDescription:
    'Computer Science student with hands-on experience in Python, Machine Learning, Deep Learning, SQL, and application development. Skilled in building ML models and deploying practical applications using Scikit-learn, TensorFlow, Streamlit, and FastAPI. Strong problem-solving skills with a keen interest in AI/ML and software development.',
  aboutText: [
    'Computer Science student with hands-on experience in Python, Machine Learning, Deep Learning, SQL, and application development. Skilled in building ML models and deploying practical applications using Scikit-learn, TensorFlow, Streamlit, and FastAPI. Strong problem-solving skills with a keen interest in AI/ML and software development.',
    'I have built and deployed over 17 GitHub projects including live machine learning applications, deep learning medical diagnostics, fraud detection systems, full-stack creator platforms, and predictive analytics tools.',
    'I actively explore scalable software architecture, modern AI capabilities, and algorithmic problem-solving. Reached the finalist round at VIT-AP University hackathon and continuously expand my skill set through industry credentials.',
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
    description: 'Currently Pursuing B.Tech with strong foundation in CS, ML & Software Engineering',
  },
  {
    icon: 'Code2',
    title: 'Software Development',
    description: 'Proficient in Python, Java, SQL, Streamlit, FastAPI, and robust application logic',
  },
  {
    icon: 'Bot',
    title: 'AI & Machine Learning',
    description: 'Practical model building and deployment with Scikit-learn and TensorFlow',
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
    ],
  },
  {
    title: 'Machine Learning',
    iconName: 'Cpu',
    skills: [
      { name: 'Scikit-learn' },
      { name: 'TensorFlow' },
      { name: 'Deep Learning' },
      { name: 'Machine Learning' },
    ],
  },
  {
    title: 'Web Development',
    iconName: 'Layout',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'Streamlit' },
      { name: 'FastAPI' },
    ],
  },
  {
    title: 'Database',
    iconName: 'Database',
    skills: [
      { name: 'MySQL' },
    ],
  },
  {
    title: 'Tools & Platforms',
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
    id: 'fraud-email-detection',
    title: 'Fraud & Spam Email Classifier',
    description:
      'Machine learning web application that classifies email text as spam/fraud or legitimate using TF-IDF feature extraction and Scikit-learn Logistic Regression.',
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'TF-IDF', 'Vercel'],
    githubUrl: PROJECT_LINKS.FRAUD_EMAIL,
    liveDemoUrl: PROJECT_LINKS.FRAUD_EMAIL_LIVE,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'resume-screening-system',
    title: 'AI Resume Screening & Ranking System',
    description:
      'Intelligent full-stack candidate evaluation system that extracts structured text from PDF resumes, tokenizes skills, and ranks candidates using TF-IDF cosine similarity.',
    technologies: ['Python', 'Flask', 'NLP', 'Scikit-learn', 'PyPDF', 'Vercel'],
    githubUrl: PROJECT_LINKS.RESUME_SCREENING,
    liveDemoUrl: PROJECT_LINKS.RESUME_SCREENING_LIVE,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'vericheck-genuine-ai',
    title: 'VeriCheck AI — Product Authenticity Verification',
    description:
      'High-precision product verification system designed to detect counterfeit goods using advanced neural analysis and computer vision image scanning.',
    technologies: ['TypeScript', 'React', 'Computer Vision', 'Neural Networks', 'Vercel'],
    githubUrl: PROJECT_LINKS.GENUINE_AI,
    liveDemoUrl: PROJECT_LINKS.GENUINE_AI_LIVE,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'brain-tumor-detection',
    title: 'Brain Tumor & Stroke Assessment',
    description:
      'Deep learning computer vision diagnostic system to detect brain tumors and evaluate neurological risk probabilities, deployed with a live Streamlit interface.',
    technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Computer Vision', 'Streamlit'],
    githubUrl: PROJECT_LINKS.BRAIN_TUMOR,
    liveDemoUrl: PROJECT_LINKS.BRAIN_TUMOR_LIVE,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'heart-disease-risk-assessment',
    title: 'Heart Disease Risk Assessment',
    description:
      'Clinical decision-support machine learning model evaluating patient cardiovascular parameters to predict coronary heart disease risk.',
    technologies: ['Python', 'Machine Learning', 'Healthcare AI', 'Scikit-learn', 'Streamlit'],
    githubUrl: PROJECT_LINKS.HEART_DISEASE,
    liveDemoUrl: PROJECT_LINKS.HEART_DISEASE_LIVE,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'kidney-disease-prediction',
    title: 'Chronic Kidney Disease Prediction',
    description:
      'Machine learning clinical diagnostic model predicting kidney disease stages from physiological and biochemical markers via an interactive Streamlit app.',
    technologies: ['Python', 'Machine Learning', 'Healthcare AI', 'Scikit-learn', 'Streamlit'],
    githubUrl: PROJECT_LINKS.KIDNEY_DISEASE,
    liveDemoUrl: PROJECT_LINKS.KIDNEY_DISEASE_LIVE,
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction Model',
    description:
      'Predictive analytics classification model designed to forecast customer attrition risk and support proactive retention strategies.',
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Predictive Analytics', 'Streamlit'],
    githubUrl: PROJECT_LINKS.CUSTOMER_CHURN,
    liveDemoUrl: PROJECT_LINKS.CUSTOMER_CHURN_LIVE,
    category: 'Data Science',
    featured: true,
  },
  {
    id: 'creatoros-content-creation',
    title: 'CreatorOS — AI Content Engine',
    description:
      'Neural content orchestration platform automating multi-format marketing, copywriting, and media production pipelines for creators and modern brands.',
    technologies: ['TypeScript', 'React', 'Generative AI', 'Tailwind CSS', 'Vercel'],
    githubUrl: PROJECT_LINKS.CONTENT_CREATION,
    liveDemoUrl: PROJECT_LINKS.CONTENT_CREATION_LIVE,
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 'rythu-report',
    title: 'Rythu Report — Farmer Digital Records Portal',
    description:
      'Mobile-friendly agricultural record management and resource portal designed especially for rural farmers with multilingual support in Telugu, English, and Hindi.',
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'i18n'],
    githubUrl: PROJECT_LINKS.RYTHU_REPORT,
    category: 'Web Development',
    featured: true,
  },
  {
    id: 'trendpulse-hacker-news',
    title: 'TrendPulse — Real-Time Tech Analytics Pipeline',
    description:
      'Real-time data pipeline and interactive analytics dashboard tracking Hacker News developer trends, engagement velocity, and community sentiment.',
    technologies: ['Python', 'Data Analytics', 'REST API', 'Data Visualization', 'HTML/CSS'],
    githubUrl: PROJECT_LINKS.TRENDPULSE,
    category: 'Data Science',
    featured: false,
  },
  {
    id: 'vendor-reliability-intelligence',
    title: 'Vendor Reliability Intelligence Platform',
    description:
      'Enterprise intelligence platform assessing vendor fulfillment, SLA benchmark compliance, and delivery risk scores with predictive analytics.',
    technologies: ['TypeScript', 'React', 'Predictive Analytics', 'Tailwind CSS', 'Vite'],
    githubUrl: PROJECT_LINKS.VENDOR_INTELLIGENCE,
    category: 'Full Stack',
    featured: false,
  },
  {
    id: 'confidence-builder',
    title: 'Confidence Builder AI Assistant',
    description:
      'Interactive conversational coaching assistant helping users practice public speaking, prepare for interviews, and build communication confidence.',
    technologies: ['TypeScript', 'React', 'Google Gemini AI', 'Tailwind CSS'],
    githubUrl: PROJECT_LINKS.CONFIDENCE_BUILDER,
    category: 'AI/ML',
    featured: false,
  },
  {
    id: 'fake-product-detection',
    title: 'Fake Product & Counterfeit Detection',
    description:
      'AI verification system identifying counterfeit listings and suspicious merchandise across online marketplaces using pattern classification.',
    technologies: ['TypeScript', 'React', 'AI Verification', 'Tailwind CSS'],
    githubUrl: PROJECT_LINKS.FAKE_PRODUCT,
    category: 'AI/ML',
    featured: false,
  },
  {
    id: 'sleep-health-assistant',
    title: 'Sleep Health & Wellness Assistant',
    description:
      'Health advisory analytics tool analyzing circadian rhythms, sleep duration metrics, and lifestyle parameters to recommend customized sleep habits.',
    technologies: ['Python', 'Machine Learning', 'Healthcare Analytics', 'Data Science'],
    githubUrl: PROJECT_LINKS.SLEEP_HEALTH,
    category: 'AI/ML',
    featured: false,
  },
  {
    id: 'heart-disease-assessment-agent',
    title: 'Heart Disease Risk Assessment Agent',
    description:
      'Automated medical reasoning agent performing multi-factor cardiovascular risk evaluation and clinical decision support.',
    technologies: ['Python', 'AI Agents', 'Healthcare AI', 'Scikit-learn'],
    githubUrl: PROJECT_LINKS.HEART_AGENT,
    category: 'AI/ML',
    featured: false,
  },
  {
    id: 'confident-ai-companion',
    title: 'Confident AI — Self-Efficacy Companion',
    description:
      'Personalized AI companion providing guided positive reinforcement, emotional clarity, and speech preparation powered by Google AI Studio.',
    technologies: ['TypeScript', 'React', 'Gemini AI', 'Tailwind CSS'],
    githubUrl: PROJECT_LINKS.CONFIDENT_AI,
    category: 'AI/ML',
    featured: false,
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio & Interactive Showcase',
    description:
      'Modern, high-performance portfolio application built with React, Vite, and Tailwind CSS featuring dark mode, animations, and live GitHub integration.',
    technologies: ['TypeScript', 'React 19', 'Tailwind CSS', 'Motion', 'Vercel'],
    githubUrl: PROJECT_LINKS.PORTFOLIO,
    liveDemoUrl: PROJECT_LINKS.PORTFOLIO_LIVE,
    category: 'Full Stack',
    featured: false,
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Engineering University / College',
    duration: 'Currently Pursuing',
    location: 'Vijayawada, Andhra Pradesh',
    status: 'Currently Pursuing',
    description:
      'Computer Science student with hands-on coursework and practical focus in Machine Learning, Deep Learning, SQL, and Application Development.',
    coursework: [
      'Data Structures & Algorithms',
      'Machine Learning & Deep Learning',
      'Database Management Systems (MySQL)',
      'Object-Oriented Programming (Java/Python)',
      'Web Development & APIs (FastAPI)',
    ],
  },
  {
    id: 'edu-2',
    degree: 'Intermediate',
    institution: 'Sri Chaitanya, Vijayawada',
    duration: 'Completed',
    location: 'Vijayawada, Andhra Pradesh',
    score: '95%',
    status: '95%',
    description:
      'Higher secondary education in Mathematics, Physics, and Chemistry (MPC) with academic distinction.',
    coursework: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    id: 'edu-3',
    degree: 'Schooling',
    institution: 'Gowtham English Medium High School, Mylavaram',
    duration: 'Completed',
    location: 'Mylavaram, Andhra Pradesh',
    score: '75%',
    status: '75%',
    description:
      'Secondary School Certificate (SSC) with a strong foundation in science, mathematics, and English communication.',
    coursework: ['General Science', 'Mathematics', 'English', 'Social Studies'],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'Infosys Certification',
    issuer: 'Infosys',
    year: '2024',
    certificateUrl: '#',
  },
  {
    id: 'cert-2',
    name: 'HP LIFE Certification',
    issuer: 'HP LIFE Foundation',
    year: '2024',
    certificateUrl: '#',
  },
  {
    id: 'cert-3',
    name: 'NIPAM Certification',
    issuer: 'National IP Awareness Mission',
    year: '2024',
    certificateUrl: '#',
  },
  {
    id: 'cert-4',
    name: 'Simplilearn SkillUp',
    issuer: 'Simplilearn',
    year: '2024',
    certificateUrl: '#',
  },
  {
    id: 'cert-5',
    name: 'HCL Certification',
    issuer: 'HCL Tech',
    year: '2024',
    certificateUrl: '#',
  },
  {
    id: 'cert-6',
    name: 'Salesforce Certification',
    issuer: 'Salesforce',
    year: '2024',
    certificateUrl: '#',
  },
  {
    id: 'cert-7',
    name: 'IBM Certification',
    issuer: 'IBM SkillsBuild',
    year: '2024',
    certificateUrl: '#',
  },
  {
    id: 'cert-8',
    name: 'AWS Certification',
    issuer: 'Amazon Web Services (AWS)',
    year: '2024',
    certificateUrl: '#',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'VIT-AP University Hackathon Finalist',
    description:
      'Participated in multiple competitive hackathons and reached the prestigious finalist round at VIT-AP University.',
    iconName: 'Trophy',
  },
  {
    id: 'ach-2',
    title: '17+ GitHub Projects & 8 Live Deployments',
    description:
      'Engineered and published 17+ open-source repositories and deployed live applications on Streamlit Community Cloud and Vercel covering healthcare AI, NLP, full-stack tools, and analytics.',
    iconName: 'Rocket',
  },
  {
    id: 'ach-3',
    title: '8 Multi-Platform Industry Certifications',
    description:
      'Validated technical knowledge through recognized industry programs from AWS, IBM, Salesforce, Infosys, HP LIFE, NIPAM, HCL, and Simplilearn.',
    iconName: 'TrendingUp',
  },
];
