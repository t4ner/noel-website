import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactForm />
    </div>
  );
};

export default Contact;
