import React, { useState } from "react";
import styles from "./FeaturedProject.module.css";

import { featuredProjects } from "../../../data/FeaturedProject.js";
function FeaturedProject() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProject = featuredProjects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const previousProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1,
    );
  };

  return (
    <section className={styles.featuredProjects} id="featured-projects">
      <div className={styles.sectionHeader}>
        <h3>Featured Projects</h3>

        <p>
          A collection of projects where I used my MERN stack development skills
          to build solutions for real-world problems. Through these projects, I
          explored AI fundamentals, learned how to work with modern AI tools,
          and combined them with software development skills to create practical
          and useful applications.
        </p>
      </div>

      <div className={styles.featuredCard}>
        <div className={styles.leftSection}>
          <span className={styles.featuredBadge}>Featured Project</span>

          <img
            src={featuredProject.image}
            alt={featuredProject.title}
            className={styles.featuredImage}
          />

          <div className={styles.projectLinks}>
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>

            <a
              href={featuredProject.live}
              target="_blank"
              rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.projectTop}>
            <h4>{featuredProject.title}</h4>
          </div>
          <h5>Problem Statement</h5>
          <p>{featuredProject.problemStatement}</p>
          <h5>Technologies Used</h5>
          <div className={styles.techContainer}>
            {featuredProject.tech.map((tech) => (
              <span key={tech} className={styles.techChip}>
                {tech}
              </span>
            ))}
          </div>

          <button className={styles.viewBtn}>View More</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
