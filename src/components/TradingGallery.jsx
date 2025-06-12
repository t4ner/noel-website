import React from "react";
import tradingImage1 from "/trading/trading1.jpg"
import tradingImage2 from "/trading/trading2.jpg"
import tradingImage3 from "/trading/trading3.jpg"
const TradingGallery = () => {
  return (
    <div className="container mx-auto flex justify-between pt-20 gap-4">
      <div className="flex-1">
        <img
          src={tradingImage1}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <img
          src={tradingImage2}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <img
          src={tradingImage3}
          alt=""
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default TradingGallery;
