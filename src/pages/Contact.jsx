import React from "react";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import OfficeMaps from "../components/OfficeMaps";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <OfficeMaps/>
      <Footer />
    </div>
  );
};

export default Contact;
