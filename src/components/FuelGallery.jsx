import React from "react";
import fuelImage1 from "/fuels/fuelImage1.jpg"
import fuelImage2 from "/fuels/fuelImage2.jpg"
import fuelImage3 from "/fuels/fuelImage3.jpg"

const FuelGallery = () => {
  return (
    <div className="container mx-auto flex justify-between pt-20 gap-4">
      <div className="flex-1">
        <img
          src={fuelImage1}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <img
          src={fuelImage2}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <img
          src={fuelImage3}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default FuelGallery;
