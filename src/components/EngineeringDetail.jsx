import React from "react";
import engineeringImage from "/main-services/engineeringImage.jpg";
const EngineeringDetail = () => {
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
              src={engineeringImage}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
            <div className="max-w-xl">
              <p>
                We provide all kinds of engineering services to our customers
                optionally with our European, Chinese and local engineers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringDetail;
