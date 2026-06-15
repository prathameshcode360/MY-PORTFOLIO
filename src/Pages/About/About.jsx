import React from "react";

import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1>About Me</h1>

        <p>
          I am Prathamesh Dattatray Mhatugade, a Computer Engineering graduate
          from Kolhapur, Maharashtra, with a strong interest in Full Stack Web
          Development and Artificial Intelligence.
        </p>

        <p>
          My journey started with a Diploma in Computer Engineering, where I
          built a strong foundation in programming and computer fundamentals.
          After that, I completed my Bachelor of Engineering in Computer Science
          with a specialization in Artificial Intelligence and Machine Learning.
        </p>

        <p>
          During my third year of engineering, I joined the Coding Ninjas
          Software Development Job Ready Bootcamp. There, I learned MERN Stack
          Development (MongoDB, Express.js, React.js, and Node.js) and improved
          my problem-solving skills through Data Structures and Algorithms using
          Java.
        </p>

        <p>
          I also explored Generative AI tools and learned how AI can help
          developers build applications faster and more efficiently.
        </p>

        <p>
          Along with web development, I gained knowledge of important Computer
          Science subjects such as Operating Systems, Databases, MySQL, and
          System Design. These concepts helped me understand how real-world
          software applications are built and managed.
        </p>

        <p>
          As part of my engineering studies, I worked on a Diabetic Retinopathy
          Detection project using Machine Learning and Deep Learning techniques.
          Through this project, I learned about data preprocessing, model
          training, image analysis, and applying AI concepts to solve real-world
          problems.
        </p>

        <p>
          Currently, I am focused on improving my skills in MERN Stack
          Development, Data Structures and Algorithms, System Design, and
          Generative AI. I enjoy building modern web applications, learning new
          technologies, and continuously growing as a software developer.
        </p>
      </div>
    </section>
  );
}

export default About;
