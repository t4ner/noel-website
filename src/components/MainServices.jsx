import React from "react";

const MainServices = () => {

  const Services = [
    {
      title: "Cement",
      image: "/main-services/main-services1.jpg",
      description: (
        <>
          We provide support in all areas from turnkey factory installation to
          spare parts supply in the cement Industry
          <ul className="mt-2">
            <li>Consulting Services</li>
            <li>Project Management Services</li>
            <li>Equipment Supply</li>
            <li>Engineering Services</li>
            <li>Commissioning and Startup Operations</li>
          </ul>
        </>
      ),
    },
    {
      title: "Port",
      image: "/main-services/main-services2.jpeg",
      description: (
        <>
          We provide customized solutions for all your equipment needs at your
          ports. In container terminals and bulk cargo terminals, we offer
          tailored solutions and support you in equipment supply, installation,
          and commissioning processes
          <ul className="mt-2">
            <li>Cranes</li>
            <li>STS (Ship-to-Shore) Cranes</li>
            <li>
              RMG (Rail-Mounted Gantry) / RTG (Rubber-Tired Gantry) Cranes
            </li>
            <li>Modification</li>
            <li>Ship Unloading / Loading</li>
            <li>Pipe Conveyors</li>
          </ul>
        </>
      ),
    },
    {
      title: "Energy",
      image: "/main-services/main-services3.jpg",
      description: (
        <>
          WHR PLANTS (WASTE HEAT RECOVERY PLANTS)
          <br />
          Our company specializes in the design and sizing of heat boilers (heat
          exchangers) for waste heat recovery systems. We provide all the
          necessary features and detailed engineering to achieve full
          integration of both mechanical and electrical scopes
          <ul className="mt-2">
            <li>Equipment Supply</li>
            <li>Engineering Services</li>
            <li>Commissioning and Startup Operations</li>
            <li>Finance</li>
          </ul>
        </>
      ),
    },
    {
      title: "Steel",
      image: "/main-services/main-services4.png",
      description: (
        <ul className="mt-2">
          <li>Power Plant</li>
          <li>Waste Heat Recovery Plant</li>
          <li>Complete production line</li>
          <li>Complete steel mill</li>
          <li>DRI</li>
          <li>Rolled</li>
          <li>Integrated production line</li>
          <li>Electrode Supply</li>
        </ul>
      ),
    },
    {
      title: "Mining and Metallurgy",
      image: "/main-services/main-services5.webp",
      description: (
        <ul className="mt-2">
          <li>Crushing Solutions for Mining</li>
          <li>Gypsum Production Line’s</li>
          <li>Aerated Concrete Block Production Line’s</li>
          <li>Air Separation Plant</li>
          <li>Aluminium Profile and Composite Panel Production Facilities</li>
          <li>PVC and Roller Shutter Production Facilitie</li>
        </ul>
      ),
    },
    {
      title: "Trading and Logistics",
      image: "/main-services/main-services6.jpg",
      description: (
        <>
          Physical Trading, logistics and distribution are our core verticals
          primarily in the form of raw materials (ie. coal, clinker, gypsum,
          limestone) international trading of commercial products (ie. cement)
          diversified operations comprise of mines and production plants.
          <br />
          We are also providing sophisticated transportation, warehousing and
          distribution services all over the world.
          <br />
          We are control the movement and storage of goods, services, or
          information within a supply chain and between the points of origin and
          consumption.
          <br />
          The company prepares tailor-made logistics solutions for each customer
          and their needs. Innovative logistics and supply-chain services and
          solutions.
        </>
      ),
    },
  ];


  return (
    <div>
      <div className="container mt-5 lg:mt-16 px-2 lg:px-0">
        <ul className="list-none p-0 grid grid-cols-1 gap-[4vw]">
          {Services.map((service, index) => (
            <li
              key={index}
              className="sticky top-0"
              style={{ paddingTop: `calc(${index + 1} * 1.5em)` }}
            >
              <div
                className="box-border rounded-lg h-auto lg:h-[70vh] 
                            flex flex-col lg:flex-row transition-all duration-500 
                            relative overflow-hidden bg-white"
              >
                <div className="w-full lg:w-2/3 relative h-[300px] lg:h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
                  <div className="max-w-xl">
                    <h2 className="text-lg lg:text-3xl mb-4 lg:mb-6 text-gray-800 font-bold font-krona">
                      {service.title}
                    </h2>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainServices;
