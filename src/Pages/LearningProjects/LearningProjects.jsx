import React, { useState } from "react";
import styles from "./LearningProjects.module.css";

import { learningProjects } from "../../data/projects";

function LearningProjects() {
  const categories = Object.keys(learningProjects);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const selectedCategory = learningProjects[activeCategory];

  return (
    <section className={styles.learningProjects}>
      <div className={styles.sectionHeader}>
        <h2>Technology Learning Projects</h2>

        <p>
          Projects built to master specific technologies and understand their
          core concepts through hands-on implementation.
        </p>
      </div>

      <div className={styles.categoryContainer}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryBtn} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className={styles.descriptionBox}>
        <p>{selectedCategory.description}</p>
      </div>

      <div className={styles.projectsGrid}>
        {selectedCategory.projects.map((project) => (
          <div key={project.title} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />

            <div className={styles.projectContent}>
              <h4>{project.title}</h4>

              <p className={styles.techStack}>{project.tech}</p>

              <button className={styles.viewBtn}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningProjects;
