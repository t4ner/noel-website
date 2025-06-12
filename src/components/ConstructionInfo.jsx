import React from "react";
import constructionImage1 from "/construction/construction1.jpg";
import constructionImage2 from "/construction/construction2.jpg";
import constructionImage3 from "/construction/construction3.jpg";

const ConstructionInfo = () => {
  return (
    <div className="px-2 lg:px-0">
      <div className="p-4 lg:p-8 text-sm lg:text-base border-l-5 border-[#0C4A79] bg-white/50 container rounded-lg mt-10 lg:mt-20">
        <p className="pb-3">
          Thanks to our best in class partners and years of experience, we are
          capable of managing diverse construction projects inside and outside
          of Turkey. We are proud to offer our clients;
        </p>
        <ul className="space-y-1">
          <li>
            Long-term experience in design and construction of industrial and
            civil facilities
          </li>
          <li>Own staff of employees around the world</li>
          <li>Annual turnover of $500M</li>
          <li>Technical Feasibility Studies</li>
          <li>Cost Calculations</li>
          <li>Department & Capacity Calculations</li>
          <li>Mass Flow Diagrams</li>
          <li>General Plant Layout</li>
          <li>Departmental Flow Sheets</li>
          <li>Equipment List’s</li>
          <li>Technical & Commercial Tender Documents</li>
        </ul>
        <p className="font-medium py-3">SUPPLIED SERVICES</p>
        <p>
          Design, Manufacture and Supply of Metal Structures, Construction and
          Installation Works For Metal Structures and Equipment of Any
          Complexity, Commissioning
        </p>
        <p className="font-medium py-3">KEY AREAS</p>
        <p>
          Cement and Mining Industries, Energy Sector, Oil and Gas Sector, Steel
          Industry, Environmental Protection Technologies
        </p>{" "}
      </div>
      <div className="container mx-auto flex justify-between pt-20 gap-4">
        <div className="flex-1">
          <img
            src={constructionImage1}
            alt=""
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <img
            src={constructionImage2}
            alt=""
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <img
            src={constructionImage3}
            alt=""
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ConstructionInfo;
