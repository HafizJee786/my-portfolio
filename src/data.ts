import { Project, Service, Stat } from "./types";

export const DEVELOPER_PROFILE = {
  name: "Hafiz Ali Hasnain",
  title: "Creative Software Developer",
  story: "Software Engineer and AI Developer focused on building web applications, AI-powered systems, and automation tools using modern technologies like Python, React, and Machine Learning.",
  portraitUrl: "avatar.jpeg", // Setting default to avatar.jpg for easy local drag-and-drop backup
  specialties: [
    "Website Development",
    "App Development",
    "Frontend Architecture",
    "SaaS Development"
  ]
};

export const PORTFOLIO_STATS: Stat[] = [
  {
    id: "projects-completed",
    value: "8",
    suffix: "+",
    label: "Completed Projects"
  },
  {
    id: "client-satisfaction",
    value: "95",
    suffix: "%",
    label: "Client Satisfaction"
  },
  {
    id: "years-exp",
    value: "4",
    suffix: "+",
    label: "Years of Experience"
  }
];

export const PORTFOLIO_SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Architecting gorgeous, responsive static and dynamic web experiences that are fast, accessible, and standards-compliant.",
    iconName: "Monitor",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Designing stateful cross-platform desktop and mobile client applications with pixel-perfect attention to layouts.",
    iconName: "Smartphone",
    technologies: ["Node.js", "Electron", "React Native", "Tailwind"]
  },
  {
    id: "web-hosting",
    title: "Website Hosting & Cloud",
    description: "Deploying secure server infrastructures, automated compilation workflows, and custom Docker container configurations.",
    iconName: "Server",
    technologies: ["Docker", "Google Cloud", "Nginx", "CI/CD"]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "PayRoll Pro",
    name: "PayRoll Pro",
    description: "Developed a full-stack Corporate Payroll Management System to streamline employee payroll processing, salary calculations, tax management, and payslip generation. Built an interactive dashboard with real-time analytics, employee management features, and automated payroll workflows to improve efficiency and accuracy",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Chart.js", "HTML5", "CSS3"],
    github: "https://github.com/HafizJee786/payroll-management",
    live: "https://github.com/HafizJee786/payroll-management",
    image: "battleship_mock",
    terminalOutput: `✓ Employee Added Successfully
✓ Monthly Salary Calculated
✓ FBR Tax Applied
✓ Payslip Generated
✓ Payroll Report Updated

Employee: Ahmed Khan
Basic Salary: PKR 120,000
Tax Deduction: PKR 8,500
Net Salary: PKR 111,500

Dashboard Analytics Updated
Total Employees: 150
Monthly Payroll: PKR 12,450,000`
  },
  {
    id: "ThinkPulse",
    name: "ThinkPulse",
    description: "Developed an AI research assistant that automates information gathering and report generation using LLMs. It integrates real-time web search and large language models to produce structured, multi-depth research outputs with history tracking and export features.",
    tags:  ["Python", "FastAPI", "LangChain", "LLMs", "Groq API", "Tavily Search", "REST API", "Docker"],
    github: "https://github.com/HafizJee786/Thinkpulse",
    live: "https://huggingface.co/spaces/Hasnain7243/Thinkpulse",
    image: "movie_mock"
  },
  {
    id: "pucit-grade-calculator",
    name: "PUCIT Grade Calculator",
    description: "Developed a web-based grade calculator for PUCIT students to calculate semester GPA and cumulative CGPA accurately. The application allows users to enter course credit hours and grades, providing instant academic performance analysis through a simple and user-friendly interface.",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "GPA Calculator"],
    github: "https://github.com/HafizJee786/Pucit-Grade-Calculator",
    live: "https://github.com/HafizJee786/Pucit-Grade-Calculator",
    image: "calc_mock",
    terminalOutput:  `✓ PUCIT Grade Calculator Started

Course: Data Structures
Credit Hours: 3
Grade: A

Course: Database Systems
Credit Hours: 3
Grade: B+

Course: Operating Systems
Credit Hours: 4
Grade: A-

--------------------------------
Semester GPA: 3.67
Total Credit Hours: 10
CGPA Updated Successfully

✓ Academic Performance Calculated`
  },
  {
    id: "resume-screener-ai",
    name: "Resume Screener AI",
    description: "Built an AI-powered resume screening platform that automatically classifies resumes, matches candidates with job descriptions, and ranks applicants based on relevance. The system uses Machine Learning, NLP, TF-IDF vectorization, and cosine similarity to streamline the recruitment process and improve candidate selection efficiency.",
    tags: ["Python", "FastAPI", "Machine Learning", "NLP", "Scikit-learn", "spaCy", "REST API", "Railway"],
    github: "https://github.com/HafizJee786/resume-screener",
    live: "https://github.com/HafizJee786/resume-screener",
    image: "saas_mock"
  }
];
