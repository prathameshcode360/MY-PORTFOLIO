import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  const coreSkills = [
    {
      title: "💻 Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Redux Toolkit",
        "React Router",
        "Context API",
        "Responsive Design",
      ],
    },
    {
      title: "⚙️ Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "MVC Architecture",
        "Middleware",
        "Socket Programming",
        "Multer",
        "Error Handling",
      ],
    },
    {
      title: "🗄️ Database Management",
      skills: ["MongoDB", "Mongoose", "CRUD Operations", "Data Modeling"],
    },
    {
      title: "🔗 API & Integration",
      skills: [
        "API Integration",
        "Axios",
        "Fetch API",
        "Asynchronous JavaScript",
        "Firebase",
      ],
    },
    {
      title: "⚡ Performance Optimization",
      skills: [
        "Lazy Loading",
        "Memoization",
        "useMemo",
        "useCallback",
        "Debouncing",
      ],
    },
    {
      title: "🛠 Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Vite", "Postman"],
    },
    {
      title: "🤝 Professional Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Team Collaboration",
        "Analytical Thinking",
        "Adaptability",
        "Time Management",
      ],
    },
  ];

  const aiSkills = [
    {
      title: "🤖 Generative AI",
      description:
        "Concepts applied while building AI-powered applications and RAG systems.",
      skills: [
        "Prompt Engineering",
        "RAG",
        "Embeddings",
        "Vector Databases",
        "LangChain",
        "Gemini API",
        "Document Processing",
        "Semantic Search",
      ],
    },
    {
      title: "🧠 Machine Learning",
      description:
        "Concepts explored and implemented during academic and personal projects.",
      skills: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "CNN",
        "MobileNetV2",
        "Data Preprocessing",
        "Model Evaluation",
      ],
    },
  ];

  return (
    <section className={styles.skills}>
      {/* Core Skills */}
      <div className={styles.section}>
        <h2>Skills & Expertise</h2>

        <div className={styles.skillsContainer}>
          {coreSkills.map((category) => (
            <div className={styles.skillCard} key={category.title}>
              <h3>{category.title}</h3>

              <div className={styles.badges}>
                {category.skills.map((skill) => (
                  <span className={styles.badge} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI & ML */}
      <div className={styles.section}>
        <h2>AI & ML Experience</h2>

        <div className={styles.skillsContainer}>
          {aiSkills.map((category) => (
            <div className={styles.skillCard} key={category.title}>
              <h3>{category.title}</h3>

              <p className={styles.description}>{category.description}</p>

              <div className={styles.badges}>
                {category.skills.map((skill) => (
                  <span className={styles.badge} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
