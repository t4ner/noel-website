import React from "react";
import constructionImage1 from "/construction/construction1.jpg";
import constructionImage2 from "/construction/construction2.jpg";
import constructionImage3 from "/construction/construction3.jpg";

const ConstructionInfo = () => {
  return (
    <div className="">
      <div className="p-6 lg:p-12 text-sm lg:text-base border-l-4 border-[#006495]  bg-white/80 container rounded-xl mt-10 lg:mt-20 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="pb-4 text-gray-700 leading-relaxed">
          Thanks to our best in class partners and years of experience, we are
          capable of managing diverse construction projects inside and outside
          of Turkey. We are proud to offer our clients;
        </p>
        <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-3">
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>
              Long-term experience in design and construction of industrial and
              civil facilities
            </span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Own staff of employees around the world</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Annual turnover of $500M</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Technical Feasibility Studies</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Cost Calculations</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Department & Capacity Calculations</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Mass Flow Diagrams</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>General Plant Layout</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Departmental Flow Sheets</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Equipment List's</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-[#006495] transition-colors duration-200">
            <span className="w-1 h-1 bg-[#006495] rounded-full"></span>
            <span>Technical & Commercial Tender Documents</span>
          </li>
        </ul>

        <div className="mt-8 space-y-6">
          <div className="bg-gray-50  rounded-lg">
            <p className="font-semibold text-[#006495] text-lg mb-2">
              SUPPLIED SERVICES
            </p>
            <p className="text-gray-700">
              Design, Manufacture and Supply of Metal Structures, Construction
              and Installation Works For Metal Structures and Equipment of Any
              Complexity, Commissioning
            </p>
          </div>

          <div className="bg-gray-50  rounded-lg">
            <p className="font-semibold text-[#006495] text-lg mb-2">
              KEY AREAS
            </p>
            <p className="text-gray-700">
              Cement and Mining Industries, Energy Sector, Oil and Gas Sector,
              Steel Industry, Environmental Protection Technologies
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 pb-10">
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={constructionImage1}
            alt="Modern industrial facility construction"
            className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={constructionImage2}
            alt="Advanced manufacturing plant"
            className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={constructionImage3}
            alt="Sustainable energy infrastructure"
            className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionInfo;
