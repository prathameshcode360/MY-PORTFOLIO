import React from "react";
import { Link, Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.logo}>
            PM
          </Link>

          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/learning-projects">Projects</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <a
            href="/assets/resumes/Prathamesh_Mhatugade_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles.resumeBtn}>
            Resume
          </a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Navbar;
