import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LicensingDetail from "../components/LicensingDetail";
import Footer from "../components/Footer";

const Licensing = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Licensing" image="/licensing/licensing-hero.jpg" />
      <LicensingDetail />
      <Footer />
    </div>
  );
};

export default Licensing;
