import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TradingInfo from "../components/TradingInfo";
import TradingList from "../components/TradingList";
import TradingGallery from "../components/TradingGallery";
import Footer from "../components/Footer";

const Trading = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Trading Services" image="/services/category-3.jpg" />
      <TradingInfo />
      <TradingList />
      <TradingGallery />
      <Footer />
    </div>
  );
};

export default Trading;
