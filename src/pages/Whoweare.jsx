import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoweareInfo from "../components/WhoweareInfo";
import WhoweareMaps from "../components/WhoweareMaps";
import WhowearePartner from "../components/WhowearePartner";
import Footer from "../components/Footer"
const Whoweare = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="We are NOEL Consulting DWC-LLC"
        image="/whoweare/whoweare-hero.webp"
      />
      <WhoweareInfo />
      <WhoweareMaps/>
      <WhowearePartner/>
      <Footer/>
    </div>
  );
};

export default Whoweare;
