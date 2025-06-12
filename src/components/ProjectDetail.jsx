import React from "react";
import projectImage from "/project/project-image.jpg";
const ProjectDetail = () => {
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
              src={projectImage}
              className="absolute inset-0 w-full h-full object-fill"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
            <div className="max-w-xl">
              <ul className="space-y-1">
                <li>Coordination between Supplier and Client</li>
                <li>
                  Collect all the data as per the signed contract with the
                  Supplier
                </li>
                <li>Arrange Kick-off meetings</li>
                <li>Monitor the general time schedule</li>
                <li>Check and approve the General Plant Layout</li>
                <li>Check and approve the General Arrangement Drawings</li>
                <li>Collect the Monthly Progress Reports from all Suppliers</li>
                <li>Prepare a “Monthly Progress Report” for the project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
