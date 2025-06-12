import React from "react";
import clinkerImage1 from "/clinker/clinker1.jpg"
import clinkerImage2 from "/clinker/clinker2.jpg"
import clinkerImage3 from "/clinker/clinker3.jpg"
const ClinkerGallery = () => {
  return (
    <div className="container mx-auto flex justify-between pt-20 gap-4">
      <div className="flex-1">
        <img
          src={clinkerImage1}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <img
          src={clinkerImage2}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <img
          src={clinkerImage3}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ClinkerGallery;
