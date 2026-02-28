// --- PROJECT IMAGE ---
import disaster from '../assets/images/disaster.png'
import bike from '../assets/images/bike.png'
import ai from '../assets/images/ai.png'
import git from '../assets/images/git.png'
import smart from '../assets/images/smart.png'
import snake from '../assets/images/snake.png'

export const skillCategories = ["All", "Languages", "Frameworks", "Tools", "Databases", "Backend"];

export const skills = [
  { name: "C++", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Java", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML", category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "ReactJs", category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Github", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "MySQL", category: "Databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", category: "Databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "NodeJs", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
];

// --- PROJECT CATEGORIES ---
export const projectCategories = ["All", "CPP", "Java", "Python", "Web Development"];

// --- PROJECTS DATA ---
export const projects = [
  {
    name: "disaster-management",
    description: "A platform for managing and coordinating disaster relief efforts effectively.",
    tags: ["React", "Tailwind", "NodeJs", "MongoDB"],
    category: "Web Development",
    image: disaster, 
    github: "https://github.com/dhritigupta-1/disaster-management",
    live: "https://disater-management.netlify.app/"
  },
  {
    name: "Bike_Rental",
    description: "A web application to rent bikes online with a user-friendly interface.",
    tags: ["PHP", "MySQL", "CSS", "HTML", "JavaScript", "Tailwind"],
    category: "Web Development",
    image: bike,
    github: "https://github.com/dhritigupta-1/Bike_Rental",
    live: "" 
  },
  {
    name: "AI Translation Tool",
    description: "A Python-based tool that uses machine learning for accurate text translation.",
    tags: ["Python", "NLTK"],
    category: "Python",
    image: ai,
    github: "https://github.com/dhritigupta-1/AI-Translation-Bot",
    live: "https://ai-translation-bot-kb0s.onrender.com"
  },
  {
    name: "Mini-Git-Version",
    description: "A version control system implementation built from scratch in C++.",
    tags: ["CPP", "File Systems"],
    category: "CPP",
    image: git,
    github: "https://github.com/dhritigupta-1/Mini-Git-Version",
    live: ""
  },
  {
    name: "SmartCache-Simulator",
    description: "Simulator for analyzing cache memory performance and hits/misses.",
    tags: ["CPP", "Architecture"],
    category: "CPP",
    image: smart,
    github: "https://github.com/dhritigupta-1/SmartCache-Simulator",
    live: "https://smart-cache.netlify.app/"
  },
  {
    name: "Snake Game",
    description: "Classic arcade game implemented using Java Swing and AWT.",
    tags: ["Java", "OOPs"],
    category: "Java",
    image: snake,
    github: "https://github.com/dhritigupta-1/Snake-Game",
    live: ""
  }
];

export const certificates = [
  {
    title: "Advanced Schema Patterns and Antipatterns",
    issuer: "MongoDB",
    pdf: "/certs/Advanced Schema Patterns and Antipatterns Certificate.pdf"
  },
  {
    title: "AI Agents with MongoDB",
    issuer: "MongoDB",
    pdf: "/certs/AI Agents with MongoDB Certificate.pdf"
  },
  {
    title: "Build Generative AI",
    issuer: "MongoDB University",
    pdf: "/certs/Build Generative AI Certificate.pdf"
  },
  {
    title: "Certificate",
    issuer: "Certification Platform",
    pdf: "/certs/certificate-CERT-1771577111135.pdf"
  },
  {
    title: "ChatGPT Certificate",
    issuer: "OpenAI / Udemy",
    pdf: "/certs/Chatgpt Certificate.pdf"
  },
  {
    title: "C++ Certificate",
    issuer: "Coding Platform",
    pdf: "/certs/CPP Certificate.pdf"
  },
  {
    title: "DSA Certificate",
    issuer: "Data Structures & Algorithms",
    pdf: "/certs/DSA Certificate.pdf"
  },
  {
    title: "Formal Language Certificate",
    issuer: "Computer Science",
    pdf: "/certs/Formal Language Certificate.pdf"
  },
  {
    title: "Indexing Design Fundamentals",
    issuer: "MongoDB",
    pdf: "/certs/Indexing Design Fundamentals Certificate.pdf"
  },
  {
    title: "Java Certificate",
    issuer: "Coding Platform",
    pdf: "/certs/Java Certificate.pdf"
  },
  {
    title: "Master Generative AI & Generative AI tools (ChatGPT & more)",
    issuer: "Udemy",
    pdf: "/certs/Master Generative AI & Generative AI tools (ChatGPT & more) Certificate.pdf"
  },
  {
    title: "Relational to Document Model",
    issuer: "MongoDB",
    pdf: "/certs/Relational to Document Model Certificate.pdf"
  },
  {
    title: "Schema Design Optimization",
    issuer: "MongoDB",
    pdf: "/certs/Schema Design Optimization Certificate.pdf"
  },
  {
    title: "Schema Patterns and Antipatterns",
    issuer: "MongoDB",
    pdf: "/certs/Schema Patterns and Antipatterns Certificate.pdf"
  },
  {
    title: "Secure MongoDB Atlas",
    issuer: "MongoDB",
    pdf: "/certs/Secure MongoDB Atlas Certificate.pdf"
  },
  {
    title: "Secure MongoDB Self-Managed",
    issuer: "MongoDB",
    pdf: "/certs/Secure MongoDB Self-Managed Certificate.pdf"
  },
  {
    title: "Sharding Strategies",
    issuer: "MongoDB",
    pdf: "/certs/Sharding Strategies Certificate.pdf"
  },
  {
    title: "Vector Search Fundamentals",
    issuer: "MongoDB",
    pdf: "/certs/Vector Search Fundamentals Certificate.pdf"
  }
];

export const personalInfo = {
  email: "dhritigupta200705@gmail.com",
  location: "Phagwara, Punjab, India",
  about: "I am a passionate Full Stack Developer with a strong foundation in C++ and Web Technologies. I love building clean, functional, and user-centric applications. Currently exploring the depths of Backend development and AI integration.",
};
