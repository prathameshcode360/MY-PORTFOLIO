import React from "react";

import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      {/* Hero Section */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Mr. Prathamesh Mhatugade</h1>

            <p className={styles.role}>Software Developer and Engineer</p>

            <h2>
              Frontend Developer | Backend Developer | MERN Stack Developer |
              Generative AI Enthusiast
            </h2>

            <p className={styles.tagline}>
              Using AI to code faster. Engineering principles to build better.
              Because great software isn't generated—it's engineered.
            </p>

            <div className={styles.heroButtons}>
              <button>View Projects</button>

              <button>Download Resume</button>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img src="/assets/images/profile.jpg" alt="Prathamesh Mhatugade" />
          </div>
        </div>
      </section>

      {/* Skills Section */}

      <section className={styles.skills}>
        <h2>Skills</h2>

        <div className={styles.skillsContainer}>
          <div className={styles.skillCard}>
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className={styles.skillCard}>
            <h3>Backend</h3>
            <p>Node.js, Express.js</p>
          </div>

          <div className={styles.skillCard}>
            <h3>Database</h3>
            <p>MongoDB</p>
          </div>

          <div className={styles.skillCard}>
            <h3>AI / ML</h3>
            <p>Python, Generative AI</p>
          </div>

          <div className={styles.skillCard}>
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Postman</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section className={styles.projects}>
        <h2>Projects</h2>

        <div className={styles.featuredProjects}>
          <h3>Featured Projects</h3>

          <div className={styles.projectCard}>
            <h4>Project Name</h4>

            <p>Short project description.</p>

            <p>
              <strong>Tech Stack:</strong> HTML, CSS, JavaScript
            </p>
          </div>

          <div className={styles.projectCard}>
            <h4>Project Name</h4>

            <p>Short project description.</p>

            <p>
              <strong>Tech Stack:</strong> React, Node.js, MongoDB
            </p>
          </div>
        </div>

        <div className={styles.miniProjects}>
          <h3>Mini Projects</h3>

          <div className={styles.projectCard}>
            <h4>Weather App</h4>

            <div className={styles.projectLinks}>
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h4>Calculator</h4>

            <div className={styles.projectLinks}>
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h4>Todo App</h4>

            <div className={styles.projectLinks}>
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
