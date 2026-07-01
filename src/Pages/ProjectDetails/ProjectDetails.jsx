import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import { learningProjects } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Find the project across all categories
  const findProject = () => {
    for (const category in learningProjects) {
      const project = learningProjects[category].projects.find(
        (p) => p.id === projectId,
      );
      if (project) return project;
    }
    return null;
  };

  const project = findProject();

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Project not found</h2>
        <button
          onClick={() => navigate("/learning-projects")}
          className={styles.backBtn}>
          <FaArrowLeft /> Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className={styles.projectDetails}>
      <div className={styles.container}>
        <button
          onClick={() => navigate("/learning-projects")}
          className={styles.backBtn}>
          <FaArrowLeft /> Back to Projects
        </button>

        <div className={styles.projectHeader}>
          <h1>{project.title}</h1>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.detailImage}
          />
        </div>

        <div className={styles.detailsContent}>
          <div className={styles.descriptionSection}>
            <h3>Project Description</h3>
            <p>{project.description}</p>
          </div>

          <div className={styles.techSection}>
            <h3>Technologies Used</h3>
            <div className={styles.techTags}>
              {project.tech.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.actionButtons}>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}>
              <FaGithub /> View on GitHub
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveBtn}>
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
