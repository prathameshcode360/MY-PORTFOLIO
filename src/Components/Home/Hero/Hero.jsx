import React from "react";
import profileImage from "../../../assets/images/MY_PHOTO.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
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
          <img src={profileImage} alt="Prathamesh Mhatugade" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
