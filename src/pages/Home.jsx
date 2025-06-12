import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainServices from "../components/MainServices";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Hero
          title="Your Solution Partner in Industrial Facilities"
          subtitle="Our goal is to produce economical and efficient solutions"
          image="/hero/home-hero.jpg"
        />
        <MainServices />
      </div>
      <Footer />
    </>
  );
};

export default Home;
