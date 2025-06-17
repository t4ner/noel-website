import React from "react";
import { equipmentCategories } from "../data";
const EquipmentList = () => {
  return (
    <div className="container mx-auto pt-20">
      <div className="space-y-12 md:space-y-18">
        {equipmentCategories.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative order-1 md:order-none">
              <div className="absolute inset-0 bg-gradient-to-r from-[#24aae1]/10 to-[#146fad]/10 rounded-3xl transform -rotate-4" />
              <div
                className="w-full h-full overflow-hidden rounded-3xl 
              shadow-[0_2px_10px_-3px_rgba(6,35,75,0.1)] 
              relative z-10 transform rotate-0"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 order-2 md:order-none">
              <div
                className="bg-white/90 backdrop-blur-sm p-6 md:p-16 rounded-3xl 
              shadow-[0_2px_10px_-3px_rgba(6,35,75,0.1)] 
              hover:shadow-[0_8px_30px_-10px_rgba(6,35,75,0.2)] 
              border border-gray-100
              transition-all duration-500 
              min-h-[400px] md:h-[600px] 
              flex flex-col justify-center
              relative z-10"
              >
                <div className="relative mb-6 md:mb-8 flex">
                  <span className="text-6xl md:text-8xl font-bold text-black/5 absolute -top-8 -left-4 md:-top-10 md:-left-6">
                    {service.id}
                  </span>
                </div>
                <div>
                  <ul className="space-y-2 md:space-y-3">
                    <p className="text-black/70">{service.description}</p>
                    {service.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-3 md:space-x-4 text-black/70 group"
                      >
                        <span className="text-[#006495]  text-2xl md:text-3xl leading-none">
                          ›
                        </span>
                        <span className="text-sm md:text-base group-hover:text-[#006495] group-hover:translate-x-2 transition-all duration-300">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentList;
