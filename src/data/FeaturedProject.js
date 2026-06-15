import featureProject1Image from "../assets/images/FeaturedProject1.png";

export const featuredProjects = [
  {
    id: 1,

    title: "AI Personal Knowledge Operating System",

    image: featureProject1Image,

    github: "https://github.com/username/project",

    live: "https://project.vercel.app",

    problemStatement:
      "Students and professionals often store knowledge across PDFs, research papers, documentation, interview notes, and personal documents. Finding specific information later becomes difficult and time-consuming because users must manually search through hundreds of pages to locate relevant content.",

    description:
      "Built an AI-powered Knowledge Operating System that allows users to upload PDFs and documents, create a personal knowledge base, and interact with their content using natural language. The platform uses Retrieval-Augmented Generation (RAG) to retrieve relevant document chunks through vector search and generate accurate responses using Gemini AI. Features include secure authentication, document processing, semantic search, chat history, source citations, AI-powered research capabilities, and future integrations with GitHub, Notion, and Google Drive through MCP.",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "LangChain",
      "Pinecone",
      "PDF-Parse",
      "JWT Authentication",
    ],
  },
];
