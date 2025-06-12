import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FinanceDetail from "../components/FinanceDetail";
import Footer from "../components/Footer"
const Finance = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Finance Solutions" image="/finance/finance-hero.jpg" />
      <FinanceDetail />
      <Footer />
    </div>
  );
};

export default Finance;
