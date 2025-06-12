import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FuelInfo from "../components/FuelInfo";
import FuelGallery from "../components/FuelGallery";
import Footer from "../components/Footer";

const Fuels = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Alternative Fuels Trading" image="/trading/fuels.jpg" />
      <FuelInfo />
      <FuelGallery />
      <Footer />
    </div>
  );
};

export default Fuels;
