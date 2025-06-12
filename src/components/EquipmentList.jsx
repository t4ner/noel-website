import React from "react";

const EquipmentList = () => {
  const Services = [
    {
      image: "/equipment/equipment-list1.jpg",
      description: (
        <>
          With our European and Far East partners we have realised E/P/C +F many
          successful projects in Cement, Iron and Steel, Energy, Metallurgy,
          Mining, Chemical and Fertilizers Industry, and different many markets.
          <p className="font-medium mt-5">
            SERVICES PROVIDED TO YOU BY OUR COMPANY
          </p>
          <ul className="mt-2">
            <li>Manufacture</li>
            <li>Supply</li>
            <li>Installation Supervision</li>
            <li>Commissioning</li>
            <li>Training</li>
            <li>After-sales Service</li>
            <li>Project Management</li>
            <li>EPC Contractor</li>
          </ul>
        </>
      ),
    },
    {
      image: "/equipment/equipment-list2.jpg",
      description: (
        <ul className="mt-2">
          <li>Port Management</li>
          <li>Shipbuilding</li>
          <li>Terminal Operators</li>
          <li>Construction of Port Facilities</li>
        </ul>
      ),
    },
    {
      image: "/equipment/equipment-list3.jpg",
      description: (
        <ul className="mt-2">
          <li>Transportation of Materials</li>
          <li>Power Communications</li>
          <li>Waterworks</li>
          <li>Environmental Protection</li>
        </ul>
      ),
    },
    {
      image: "/equipment/equipment-list4.png",
      description: (
        <ul className="mt-2">
          <li>Complete production line</li>
          <li>Complete steel mill</li>
          <li>DRI</li>
          <li>Rolled</li>
          <li>İntegrated production line</li>
        </ul>
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

export default EquipmentList;
