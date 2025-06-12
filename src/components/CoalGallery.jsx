import React from "react";
import coalImage1 from "/coal/coalImage1.webp"
import coalImage2 from "/coal/coalImage2.jpg"

const CoalGallery = () => {
  return (
    <div className="container mx-auto flex justify-between pt-20 gap-4">
      <div className="flex-1">
        <img
          src={coalImage1}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <img
          src={coalImage2}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
     
    </div>
  );
};

export default CoalGallery;
