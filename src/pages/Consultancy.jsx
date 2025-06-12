import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ConsultancyDetail from "../components/ConsultancyDetail";
import Footer from "../components/Footer";

const Consultancy = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Consultancy" image="/consultancy/consultancy-hero.jpg" />
      <ConsultancyDetail />
      <Footer />
    </div>
  );
};

export default Consultancy;
