import projectImg from "../assets/images/Demo_project.png";

export const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: projectImg,
  },
  {
    id: 2,
    title: "AI Resume Analyzer",
    image: projectImg,
  },
  {
    id: 3,
    title: "MERN Blog Application",
    image: projectImg,
  },
];

export const learningProjects = {
  Frontend: {
    description:
      "Projects focused on mastering frontend fundamentals including HTML, CSS, JavaScript, React, Context API, Redux and Firebase integration.",

    projects: [
      {
        title: "Portfolio Website",
        tech: "HTML • CSS • JavaScript",
        image: projectImg,
      },
      {
        title: "Weather Application",
        tech: "React • API Integration",
        image: projectImg,
      },
      {
        title: "Shopping Cart",
        tech: "React • Context API",
        image: projectImg,
      },
      {
        title: "Authentication App",
        tech: "React • Firebase",
        image: projectImg,
      },
      {
        title: "Task Manager",
        tech: "React • Redux",
        image: projectImg,
      },
    ],
  },

  Backend: {
    description:
      "Projects focused on Node.js, Express.js, MongoDB, authentication, REST APIs, middleware implementation and file handling.",

    projects: [
      {
        title: "REST API",
        tech: "Node.js • Express",
        image: projectImg,
      },
      {
        title: "Authentication System",
        tech: "JWT • Bcrypt",
        image: projectImg,
      },
      {
        title: "File Upload System",
        tech: "Multer",
        image: projectImg,
      },
      {
        title: "Blog API",
        tech: "MongoDB • Express",
        image: projectImg,
      },
    ],
  },

  "Full-Stack": {
    description:
      "Projects combining frontend and backend technologies to build complete production-ready applications.",

    projects: [
      {
        title: "Blog Application",
        tech: "MERN Stack",
        image: projectImg,
      },
      {
        title: "Learning Management System",
        tech: "MERN Stack",
        image: projectImg,
      },
    ],
  },

  "Generative AI": {
    description:
      "Projects exploring prompt engineering, AI APIs and practical AI-powered web applications.",

    projects: [
      {
        title: "AI Chat Application",
        tech: "OpenAI API",
        image: projectImg,
      },
      {
        title: "AI Resume Analyzer",
        tech: "LLM Integration",
        image: projectImg,
      },
    ],
  },
};
