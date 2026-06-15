import React from "react";
import styles from "./Education.module.css";

function Education() {
  const educationData = [
    {
      id: 1,
      degree:
        "Bachelor of Engineering in Artificial Intelligence & Machine Learning",
      period: "Sept 2023 – May 2026",
      institution: "SSPM College of Engineering, Mumbai University",
      score: "CGPA: 8.20",
      icon: "🎓",
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      period: "Sept 2021 – May 2023",
      institution: "Vidya Vardhini Institute of Technology, PAL",
      score: "Percentage: 79%",
      icon: "📘",
    },
    {
      id: 3,
      degree: "Full Stack Developer with Generative AI - JOB Ready Bootcamp",
      period: "March 2024 – December 2025",
      institution: "Coding Ninjas",
      score: "Certification Program",
      icon: "🚀",
    },
  ];

  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Education</h2>
          <p>My academic journey and professional certifications</p>
        </div>

        <div className={styles.cardsContainer}>
          {educationData.map((edu) => (
            <div className={styles.educationCard} key={edu.id}>
              <div className={styles.cardIcon}>{edu.icon}</div>

              <div className={styles.cardContent}>
                <h3 className={styles.degree}>{edu.degree}</h3>

                <div className={styles.period}>
                  <span className={styles.calendarIcon}>📅</span>
                  {edu.period}
                </div>

                <div className={styles.institution}>
                  <span className={styles.locationIcon}>🏫</span>
                  {edu.institution}
                </div>

                <div className={styles.score}>
                  <span className={styles.scoreIcon}>
                    {edu.id === 3 ? "🏅" : "⭐"}
                  </span>
                  {edu.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
