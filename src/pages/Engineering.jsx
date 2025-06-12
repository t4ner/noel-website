import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EngineeringDetail from "../components/EngineeringDetail";
import Footer from "../components/Footer";

const Engineering = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Engineering" image="/services/category-7.jpg" />
      <EngineeringDetail />
      <Footer />
    </div>
  );
};

export default Engineering;
