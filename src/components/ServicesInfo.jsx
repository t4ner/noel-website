import React from "react";

const ServicesInfo = () => {
  return (
    <div className="">
      <div className="p-6 lg:p-12 text-sm lg:text-base border-l-4 border-[#006495] bg-white/80 container rounded-xl mt-10 lg:mt-20 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="pb-4 text-gray-700 leading-relaxed">
          Physical Trading, Logistics and Distribution are Our Core Verticals
          Primarily in the Form of Raw Materials (ie. Coal, Clinker, Gypsum,
          Limestone) International Trading of Commercial Products (ie. Cement)
          Diversified Operations Comprise of Mines and Production Plants.
        </p>
        <p className="font-semibold text-[#006495] text-lg mb-2">Core Values</p>
        <ul className="space-y-2 gap-3">
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Quality Products</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Client Experience</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Outstanding Product Knowledge</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesInfo;
