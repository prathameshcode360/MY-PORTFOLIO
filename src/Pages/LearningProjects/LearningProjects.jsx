import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LearningProjects.module.css";
import { learningProjects } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

function LearningProjects() {
  const navigate = useNavigate();
  const categories = Object.keys(learningProjects);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const selectedCategory = learningProjects[activeCategory];

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

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
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.imageOverlay}>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayBtn}
                  aria-label="View GitHub Repository">
                  <FaGithub /> Code
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayBtn}
                  aria-label="View Live Demo">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>

            <div className={styles.projectContent}>
              <h4>{project.title}</h4>

              <div className={styles.techTags}>
                {project.tech.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <button
                className={styles.viewBtn}
                onClick={() => handleViewDetails(project.id)}>
                View Details <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningProjects;
