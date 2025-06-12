import React from "react";
import consultancyImage from "/consultancy/consultancy-image.jpg";
const ConsultancyDetail = () => {
  return (
    <div>
      <div className="container mt-5 lg:mt-20 px-2 lg:px-0">
        <div
          className="box-border rounded-lg h-auto lg:h-[60vh] 
                        flex flex-col lg:flex-row transition-all duration-500 
                        relative overflow-hidden bg-white"
        >
          <div className="w-full lg:w-2/3 relative h-[300px] lg:h-full">
            <img
              src={consultancyImage}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
            <div className="max-w-xl">
              <ul className="space-y-2">
                <li>Technical Feasibility Studies</li>
                <li>Cost Calculations</li>
                <li>Department & Capacity Calculations</li>
                <li>Mass Flow Diagrams</li>
                <li>General Plant Layout</li>
                <li>General Arrangement Drawings</li>
                <li>Departmental Flow Sheets</li>
                <li>Equipment List’s</li>
                <li>Technical & Commercial Tender Documents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyDetail;
