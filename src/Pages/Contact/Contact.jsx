import React from "react";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1>Contact Me</h1>

        <p className={styles.description}>
          Feel free to reach out for collaborations, opportunities, or just a
          friendly conversation about technology and software development.
        </p>

        <div className={styles.contactCard}>
          <h3>Email</h3>

          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </div>

        <div className={styles.contactCard}>
          <h3>LinkedIn</h3>

          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer">
            View LinkedIn Profile
          </a>
        </div>

        <div className={styles.contactCard}>
          <h3>GitHub</h3>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
