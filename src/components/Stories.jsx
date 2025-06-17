import React from "react";
import { cards } from "../data.js";

const Information = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background Elements */}

      <div className="relative container mx-auto">
        <h2 className="text-xl md:text-3xl  mb-18 font-bold font-krona">
          Latest insights and stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative px-4 sm:px-0">
          {cards.map((card, index) => (
            <div key={index} className="group relative">
             
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-[18px] p-6 sm:p-8 lg:p-10  border border-gray-100/50">
                {/* Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.number}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

               

                {/* Content Container */}
                <div className="relative z-10">
                  <div className="w-16 sm:w-20 h-0.5 mb-6 sm:mb-8 bg-gradient-to-r from-[#24aae1] to-[#146fad] hover:w-[120px] transition-all duration-300" />

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {card.content}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-transparent rounded-tr-[18px] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
