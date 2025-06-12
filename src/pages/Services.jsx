import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesList from '../components/ServicesList'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <Hero 
        title="Services"
        image="/services/services-1.jpg"/>
        <ServicesList/>
        <Footer/>
    </div>
  )
}

export default Services