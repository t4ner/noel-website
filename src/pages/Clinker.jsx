import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClinkerInfo from "../components/ClinkerInfo";
import ClinkerGallery from "../components/ClinkerGallery";
import Footer from "../components/Footer";

const Clinker = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Clinker & Cement Trading" image="/trading/clinker.jpg" />
      <ClinkerInfo />
      <ClinkerGallery />
      <Footer />
    </div>
  );
};

export default Clinker;
