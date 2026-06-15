import React, { useState } from "react";
import styles from "./Projects.module.css";

import { featuredProjects, learningProjects } from "../../../data/projects";

function Projects() {
  const categories = Object.keys(learningProjects);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const selectedCategory = learningProjects[activeCategory];

  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>

      {/* FEATURED PROJECTS */}

      <div className={styles.sectionHeader}>
        <h3>Featured Projects</h3>

        <p>
          A collection of my best projects that showcase full-stack development,
          problem solving and software engineering skills.
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {featuredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />

            <div className={styles.projectContent}>
              <h4>{project.title}</h4>

              <button className={styles.viewBtn}>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* LEARNING PROJECTS */}

      <div className={styles.learningSection}>
        <div className={styles.sectionHeader}>
          <h3>Technology Learning Projects</h3>

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
      </div>
    </section>
  );
}

export default Projects;
