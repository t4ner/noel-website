import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoalInformation from "../components/CoalInformation";
import CoalGallery from "../components/CoalGallery";
import Footer from "../components/Footer";

const Coal = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Coal Trading" image="/trading/coal.jpg" />
      <CoalInformation />
      <CoalGallery />
      <Footer />
    </div>
  );
};

export default Coal;
