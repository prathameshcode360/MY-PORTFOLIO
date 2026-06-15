import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import Skills from "../../Components/Home/Skills/Skill";
import FeaturedProject from "../../Components/Home/FeaturedProject/FeaturedProject";
import Education from "../../Components/Home/Education/Education";

function Homepage() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProject />
      <Education />
    </>
  );
}

export default Homepage;
