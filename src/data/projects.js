import projectImg from "../assets/images/Demo_project.png";
import todoImage from "../assets/Thumbnails/TODO.png";
import passwordAnalyzerImage from "../assets/Thumbnails/Password_Strength_Analyzer.png";
export const learningProjects = {
  "Core Frontend": {
    description:
      "Projects built using HTML, CSS, and JavaScript focusing on DOM manipulation, responsive design, API integration, and browser-based application development.",

    projects: [
      {
        id: "todo-app",
        title: "TO-DO App",
        description:
          "A simple and responsive Task Management Application built using HTML, CSS, and JavaScript that allows users to add, edit, delete, and mark tasks as complete. The project demonstrates CRUD operations through DOM manipulation and uses Local Storage to persist tasks, ensuring data remains available even after the browser is refreshed.",

        tech: ["HTML", "CSS", "JavaScript"],
        image: todoImage,
        githubLink: "https://github.com/prathameshcode360/TO-DO-APP.git",
        liveDemo: " https://prathameshcode360.github.io/TO-DO-APP/",
      },
      {
        id: "password-analyzer",
        title: "Password Analyzer",
        description:
          "A simple Password Strength Analyzer Chrome Extension built using HTML, CSS, and JavaScript that allows users to analyze password strength in real time, generate secure passwords, estimate crack time, check passwords against known data breaches using the Have I Been Pwned API, and receive personalized security suggestions. The project demonstrates DOM manipulation, asynchronous API integration, the Web Crypto API for secure SHA-1 hashing, and a privacy-first approach where passwords are never stored or transmitted in full",

        tech: ["HTML", "CSS", "JavaScript", " Web Crypto API"],
        image: passwordAnalyzerImage,
        githubLink:
          "https://github.com/prathameshcode360/Password-Strength-Analyzer.git",
        liveDemo:
          "https://prathameshcode360.github.io/Password-Strength-Analyzer/",
      },
      {
        id: "portfolio-website",
        title: "Portfolio Website",
        description:
          "Responsive personal portfolio showcasing projects, skills, and achievements with modern UI design and smooth user interactions.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: projectImg,
      },
      {
        id: "crypto-tracker",
        title: "Crypto Tracker",
        description:
          "Cryptocurrency tracking dashboard using external APIs to display live market prices, trends, and detailed coin information.",
        tech: ["HTML", "CSS", "JavaScript", "API Integration"],
        image: projectImg,
      },
    ],
  },

  React: {
    description:
      "Projects built using React ecosystem including Context API, Redux Toolkit, Firebase integration, and advanced state management.",

    projects: [
      {
        id: "buy-busy",
        title: "BuyBusy",
        description:
          "Full-featured e-commerce application with authentication, cart management, order processing, product browsing, and Redux-powered state management.",
        tech: ["React", "Redux Toolkit", "Firebase"],
        image: projectImg,
      },
      {
        id: "blog-app",
        title: "Blog App",
        description:
          "Blog management platform with authentication, post creation, editing, and deletion using React and Firebase backend services.",
        tech: ["React", "Firebase"],
        image: projectImg,
      },
      {
        id: "expense-tracker",
        title: "Expense Tracker",
        description:
          "Personal finance tracking application with expense categorization, filtering, analytics, and Firebase-based data persistence.",
        tech: ["React", "Firebase"],
        image: projectImg,
      },
      {
        id: "shopping-cart",
        title: "Shopping Cart",
        description:
          "E-commerce shopping cart implementation with Context API for global state management and seamless user experience.",
        tech: ["React", "Context API"],
        image: projectImg,
      },
      {
        id: "todo-note-maker",
        title: "Todo & Note Maker",
        description:
          "Productivity application combining task management and note-taking features with Redux Toolkit state management.",
        tech: ["React", "Redux Toolkit"],
        image: projectImg,
      },
    ],
  },

  Backend: {
    description:
      "Backend development projects focused on REST APIs, authentication, database management, real-time communication, and scalable server architecture.",

    projects: [
      {
        id: "job-portal",
        title: "Job Portal API",
        description:
          "Backend system for job posting, application management, authentication, and role-based access control using Node.js and Express.",
        tech: ["Node.js", "Express.js"],
        image: projectImg,
      },
      {
        id: "ecommerce-api",
        title: "E-Commerce Backend",
        description:
          "Complete backend for an e-commerce platform featuring authentication, products, orders, users, and RESTful APIs.",
        tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
        image: projectImg,
      },
      {
        id: "chat-application",
        title: "Chat Application",
        description:
          "Real-time chat platform supporting instant messaging, user authentication, and persistent conversations using socket programming.",
        tech: ["Node.js", "Socket.io", "MongoDB", "Mongoose"],
        image: projectImg,
      },
    ],
  },

  MERN: {
    description:
      "Full-stack applications combining React, Node.js, Express.js, and MongoDB to build complete production-ready solutions.",

    projects: [
      {
        id: "learning-management-system",
        title: "Learning Management System",
        description:
          "Comprehensive LMS platform featuring course management, student enrollment, progress tracking, assessments, and content delivery.",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        image: projectImg,
      },
    ],
  },

  "Generative AI": {
    description:
      "Projects integrating Large Language Models, Retrieval-Augmented Generation (RAG), vector search, and AI-powered workflows.",

    projects: [
      {
        id: "personal-ai-doc-system",
        title: "Personal AI DOC System",
        description:
          "AI-powered document assistant that enables users to upload documents, perform semantic search, and chat with their content using RAG architecture and Gemini AI.",
        tech: [
          "MERN",
          "RAG",
          "Gemini AI",
          "LLM",
          "Vector Search",
          "MongoDB Atlas",
        ],
        image: projectImg,
      },
    ],
  },

  "Machine Learning": {
    description:
      "Machine Learning projects involving data analysis, model training, prediction systems, and intelligent automation.",

    projects: [],
  },
};
