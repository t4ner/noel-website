import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ConstructionInfo from "../components/ConstructionInfo";
import Footer from "../components/Footer";

const Construction = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Construction Service"
        image="/construction/construction-hero.jpg"
      />
      <ConstructionInfo />
      <Footer />
    </div>
  );
};

export default Construction;
