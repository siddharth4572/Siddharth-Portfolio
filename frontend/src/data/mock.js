// Mock data for Siddharth's Portfolio

export const personalInfo = {
  name: "Siddharth Katyal",
  title: "Software Engineer & AI/ML Enthusiast",
  bio: "I'm a passionate B.Tech Computer Science student with a drive for building meaningful and delightful digital products. I specialize in full-stack development, AI/ML innovations, and scalable cloud-based solutions that make a real impact.",
  email: "siddharthkatyal29@gmail.com",
  github: "https://github.com/siddharth4572",
  linkedin: "https://www.linkedin.com/in/siddharth-katyal-262a09255/",
  instagram: "https://www.instagram.com/siddkatyal29/",
  avatar: "/avatar.svg"
};

export const projects = [
  {
    id: 1,
    title: "E-commerce Sales Chatbot",
    description: "Intelligent AI-powered chatbot that revolutionizes customer service with natural language processing and smart product recommendations.",
    techStack: ["Flask", "Next.js", "React", "Tailwind CSS", "OpenAI API"],
    category: "AI/ML",
    status: "Live",
    demoUrl: "#",
    githubUrl: "https://github.com/siddharth4572/Ecommerce-Chatbot-",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    highlights: ["Natural Language Processing", "Real-time Responses", "Product Integration"]
  },
  {
    id: 2,
    title: "Collaborative Code Editor",
    description: "Real-time collaborative web-based code editor enabling seamless team coding with live synchronization and multi-language support.",
    techStack: ["React", "Node.js", "Socket.io", "Monaco Editor"],
    category: "Web Development",
    status: "Live",
    demoUrl: "#",
    githubUrl: "https://github.com/siddharth4572/CodCollab",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    highlights: ["Real-time Collaboration", "Multi-language Support", "Live Synchronization"]
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "Feature-rich instant messaging platform with group chats, file sharing, and real-time notifications for seamless communication.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Web Development",
    status: "Live",
    demoUrl: "#",
    githubUrl: "https://github.com/siddharth4572/Chat-App-",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
    highlights: ["Group Chat", "File Sharing", "Push Notifications"]
  },
  {
    id: 4,
    title: "Bitcoin and Ethereum Price Prediction",
    description: "Advanced machine learning system utilizing deep learning algorithms to predict Bitcoin & Ethereum price movements with high accuracy.",
    techStack: ["Python", "TensorFlow", "pandas", "scikit-learn", "LSTM"],
    category: "AI/ML",
    status: "Research",
    demoUrl: "#",
    githubUrl: "https://github.com/siddharth4572/Bitcoin-and-Ethereum-Price-Prediction",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop",
    highlights: ["LSTM Networks", "Technical Analysis", "Predictive Modeling"]
  },
  {
    id: 5,
    title: "Yoga Pose Detection System",
    description: "CNN-powered computer vision system that accurately classifies yoga poses in real-time, perfect for fitness applications.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    category: "AI/ML",
    status: "Live",
    demoUrl: "#",
    githubUrl: "https://github.com/siddharth4572/yoga-pose-detection",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    highlights: ["Real-time Detection", "Computer Vision", "Fitness Tech"]
  },
  {
    id: 6,
    title: "Enhanced Blood Test Analysis System",
    description: "A comprehensive blood test analysis system that allows users to upload reports, compare results over time, and get personalized AI-powered insights from a medical history-aware chatbot.",
    techStack: ["Python", "Flask", "React", "SQLite", "Google Gemini", "Recharts"],
    category: "AI/ML",
    status: "Live",
    demoUrl: "#",
    githubUrl: "https://github.com/siddharth4572/Enhanced-Blood-Test-Analysis-System-with-AI-Assistant",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    highlights: ["Personalized AI Insights", "Health Trend Tracking", "Contextual AI Chat"]
  },
  {
    id: 7,
    title: "Personal Finance Visualizer",
    description: "A simple web application for tracking personal finances built with Next.js, React, shadcn/ui, Recharts, and MongoDB.",
    techStack: ["Next.js", "React", "shadcn/ui", "Recharts", "MongoDB"],
    category: "Web Development",
    status: "Live",
    demoUrl: "#",
    githubUrl: "https://github.com/siddharth4572/Personal-Finance-App",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    highlights: ["Transaction Tracking", "Interactive Charts", "Responsive Design"]
  },
  {
    id: 8,
    title: "Inventory & Order Sync System",
    description: "A production-ready backend system for inventory management and order synchronization, featuring third-party e-commerce integrations and robust alerting.",
    techStack: ["NestJS", "PostgreSQL", "Redis", "BullMQ", "Prisma", "AWS S3"],
    category: "Backend",
    status: "Live",
    demoUrl: "#",
    githubUrl: "https://github.com/siddharth4572/completeInventory",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    highlights: ["E-commerce Webhooks", "Real-time Stock Sync", "Automated Reporting"]
  }
];

export const skills = {
  "Programming Languages": [
    { name: "JavaScript", level: 90, icon: "javascript" },
    { name: "Python", level: 85, icon: "python" },
    { name: "TypeScript", level: 80, icon: "typescript" },
    { name: "C++", level: 75, icon: "cpp" },
    { name: "Java", level: 70, icon: "java" },
    { name: "C", level: 65, icon: "c" }
  ],
  "Frontend Development": [
    { name: "React", level: 90, icon: "react" },
    { name: "Vue.js", level: 75, icon: "vue" },
    { name: "Tailwind CSS", level: 95, icon: "tailwind" },
    { name: "HTML5", level: 95, icon: "html" },
    { name: "CSS3", level: 90, icon: "css" }
  ],
  "Backend & Database": [
    { name: "Node.js", level: 85, icon: "nodejs" },
    { name: "Flask", level: 80, icon: "flask" },
    { name: "PostgreSQL", level: 75, icon: "postgresql" },
    { name: "SQLite", level: 80, icon: "sqlite" },
    { name: "SQL", level: 85, icon: "database" }
  ],
  "AI/ML & Data Science": [
    { name: "TensorFlow", level: 80, icon: "tensorflow" },
    { name: "Keras", level: 75, icon: "keras" },
    { name: "scikit-learn", level: 70, icon: "sklearn" },
    { name: "Pandas", level: 85, icon: "pandas" },
    { name: "CNN", level: 75, icon: "brain" }
  ],
  "Tools & Technologies": [
    { name: "Git", level: 90, icon: "git" },
    { name: "GitHub", level: 90, icon: "github" },
    { name: "MATLAB", level: 60, icon: "matlab" },
    { name: "AWS", level: 70, icon: "aws" }
  ]
};

export const achievements = [
  {
    id: 1,
    title: "Grap-E-Thon Competition",
    description: "Secured 10th rank for innovative Stock Market Analyzer project featuring advanced data analysis and market prediction algorithms",
    category: "Competition",
    rank: "10th Position",
    project: "Stock Market Analyzer",
    skills: ["Data Analysis", "Market Prediction", "Python"],
    date: "2024"
  }
];

export const certifications = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Foundational understanding of AWS cloud services, architecture, and best practices",
    date: "2024",
    credentialId: "AWS-CP-2024",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"]
  },
  {
    id: 2,
    title: "DevOps Fundamentals",
    issuer: "Technology Institute",
    description: "Core concepts of DevOps practices, CI/CD pipelines, and automation tools",
    date: "2024", 
    credentialId: "DEVOPS-FUND-2024",
    skills: ["CI/CD", "Automation", "Infrastructure"]
  }
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];