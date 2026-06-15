import React, { useState } from "react";
import styles from "./Certificates.module.css";

import { certificatesData } from "../../data/certificates";

function Certificates() {
  const categories = Object.keys(certificatesData);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const selectedCategory = certificatesData[activeCategory];

  return (
    <section className={styles.certificates} id="certificates">
      <div className={styles.sectionHeader}>
        <h2>Certificates & Achievements</h2>
        <p>
          Professional certifications and courses completed to enhance my skills
          and knowledge across various domains.
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

      <div className={styles.certificatesGrid}>
        {selectedCategory.certificates.map((certificate) => (
          <div key={certificate.title} className={styles.certificateCard}>
            <div className={styles.certificateImageContainer}>
              <img
                src={certificate.image}
                alt={certificate.title}
                className={styles.certificateImage}
              />
            </div>

            <div className={styles.certificateContent}>
              <h4>{certificate.title}</h4>

              {certificate.issuer && (
                <p className={styles.issuer}>
                  <span className={styles.issuerIcon}>🏢</span>
                  {certificate.issuer}
                </p>
              )}

              {certificate.date && (
                <p className={styles.date}>
                  <span className={styles.dateIcon}>📅</span>
                  {certificate.date}
                </p>
              )}

              {certificate.credentials && (
                <p className={styles.credentials}>
                  <span className={styles.credentialIcon}>🔑</span>
                  Credential ID: {certificate.credentials}
                </p>
              )}

              <div className={styles.buttonGroup}>
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewBtn}>
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
