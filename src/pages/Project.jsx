import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectDetail from "../components/ProjectDetail";
import Footer from "../components/Footer";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Project Management" image="/project/project-hero.jpg" />
      <ProjectDetail />
      <Footer />
    </div>
  );
};

export default Project;
