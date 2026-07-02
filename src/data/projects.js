import projectImg from "../assets/images/Demo_project.png";
import todoImage from "../assets/Thumbnails/Core Frontend/TODO.png";
import passwordAnalyzerImage from "../assets/Thumbnails/Core Frontend/Password_Strength_Analyzer.png";
import portfolioImage from "../assets/Thumbnails/Core Frontend/portfolio.png";
import cryptoTrackerImage from "../assets/Thumbnails/Core Frontend/CryptoTracker.png";
import blogAppImage from "../assets/Thumbnails/React/BlogApp.png";
import expenseTrackerImage from "../assets/Thumbnails/React/ExpenseTracker.png";
import photoFolioImage from "../assets/Thumbnails/React/PhotoFolio.png";
import shoppingCartImage from "../assets/Thumbnails/React/ShoppingCart.png";
import nextCartImage from "../assets/Thumbnails/React/NextCart.png";
import todoNoteImage from "../assets/Thumbnails/React/todoNote.png";

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
          "A simple and responsive Single Page Portfolio Website built using HTML, CSS, and JavaScript. This beginner-friendly project demonstrates the fundamental structure of a web application by implementing sections like Navigation, Hero, About, Services, Skills, Education, Contact, and Footer. It also showcases responsive design using Flexbox and CSS Grid, along with basic JavaScript features such as a mobile navigation menu, typing effect, smooth scrolling, and button click events",
        tech: ["HTML", "CSS", "JavaScript"],
        image: portfolioImage,
        githubLink: "https://github.com/prathameshcode360/Portfolio.git",
        liveDemo: "https://prathameshcode360.github.io/Portfolio/",
      },
      {
        id: "crypto-tracker",
        title: "Crypto Tracker",
        description:
          "Crypto Tracker is a responsive web application built with HTML, CSS, and JavaScript that fetches real-time cryptocurrency market data from the CoinGecko API. Users can search, sort, and save their favorite cryptocurrencies using Local Storage, providing a simple and interactive way to track the crypto market.",
        tech: ["HTML", "CSS", "JavaScript", "API Integration"],
        image: cryptoTrackerImage,
        githubLink:
          "https://github.com/prathameshcode360/Crypto-Tracker-App.git",
        liveDemo: "https://prathameshcode360.github.io/Crypto-Tracker-App/",
      },
    ],
  },

  React: {
    description:
      "Projects built using React ecosystem including Context API, Redux Toolkit, Firebase integration, and advanced state management.",

    projects: [
      {
        id: "next-cart",
        title: "NextCart",
        description:
          "NextCart is a modern and responsive e-commerce web application built using React,Redux Toolkit, and Firebase. It enables users to browse products, search and filter items, manage their cart and wishlist, securely authenticate, and place orders. The application focuses on delivering a seamless shopping experience with efficient state management, real-time database integration, and a clean, user-friendly interface.",
        tech: ["React", "Redux Toolkit", "Firebase"],
        image: nextCartImage,
        githubLink: "https://github.com/prathameshcode360/NextCart.git",
        liveDemo: "https://prathameshcode360.github.io/NextCart/",
      },
      {
        id: "blog-app",
        title: "Blog App",
        description:
          "A simple and responsive Blog Application built with React Hooks and Firebase Fire store.Users can add, edit, update, and delete blogs with real-time data handling.The app focuses on clean UI, proper state management, and modern React best practices.",
        tech: ["React", "React-Hooks", "Firebase"],
        image: blogAppImage,
        githubLink: "https://github.com/prathameshcode360/BLOG-APP.git",
        liveDemo: "https://prathameshcode360.github.io/BLOG-APP",
      },
      {
        id: "expense-tracker",
        title: "Expense Tracker",
        description:
          "A modern Expense Tracker App built using React Hooks and Firebase Firestore.It allows users to add, update, and delete transactions with real-time balance tracking.The app is fully responsive and deployed using GitHub Pages.Perfect for learning React + Firebase integration",
        tech: ["React", "React-Hooks", "Firebase"],
        image: expenseTrackerImage,
        githubLink:
          "https://github.com/prathameshcode360/EXPENSE-TRACKER-APP.git",
        liveDemo: "https://prathameshcode360.github.io/EXPENSE-TRACKER-APP",
      },

      {
        id: "photo-folio",
        title: "Photo Folio",
        description:
          "PhotoFolio is a simple photo gallery app developed using React.It allows users to organize images into albums and edit them easily.Firebase Firestore is used for real-time data management.",
        tech: ["React", "Firebase", "React Hooks"],
        image: photoFolioImage,
        githubLink: "https://github.com/prathameshcode360/PHOTO-FOLIO-APP.git",
        liveDemo: "https://prathameshcode360.github.io/PHOTO-FOLIO-APP",
      },

      {
        id: "shopping-cart",
        title: "Shopping Cart",
        description:
          "A simple shopping cart application built using React and Context API.It allows users to add, remove, and manage cart items globally.The project focuses on clean state management without Redux.",
        tech: ["React", "Context API"],
        image: shoppingCartImage,
        githubLink: "https://github.com/prathameshcode360/SHOPPING-CART.git",
        liveDemo: "https://prathameshcode360.github.io/SHOPPING-CART",
      },
      // {
      //   id: "todo-note-maker",
      //   title: "Todo & Note Maker",
      //   description:
      //     "This project documents my step-by-step learning journey with Redux and Redux Toolkit in React. I started by understanding the fundamentals of core Redux, including actions, reducers, the store, and React-Redux integration, before migrating to Redux Toolkit to learn modern state management practices. Along the way, I explored selectors, middleware, extra reducers, asynchronous API calls using Fetch and Axios, and `createAsyncThunk`. Each commit in this repository represents a new concept I learned and implemented, making it both a practical learning resource and a reference for anyone getting started with Redux and Redux Toolkit.",
      //   tech: ["React", "Redux Toolkit"],
      //   image: todoNoteImage,
      //   githubLink:
      //     "https://github.com/prathameshcode360/Getting-Started-With-Redux.git",
      //   liveDemo:
      //     "https://prathameshcode360.github.io/Getting-Started-With-Redux",
      // },
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
