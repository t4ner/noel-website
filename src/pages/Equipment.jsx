import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EquipmentList from "../components/EquipmentList";
import Footer from "../components/Footer";

const Equipment = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Equipment & Spare Part Supply"
        image="/equipment/equipment-hero.jpg"
      />
      <EquipmentList />
      <Footer/>
    </div>
  );
};

export default Equipment;
