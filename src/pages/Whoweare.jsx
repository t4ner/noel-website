import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoweareInfo from "../components/WhoweareInfo";
import WhoweareMaps from "../components/WhoweareMaps";

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
    </div>
  );
};

export default Whoweare;
