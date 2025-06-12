import React, { useEffect, useRef, useState } from "react";
import { tradingservices } from "../data.js";
import { Link } from "react-router-dom";

const TradingList = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Temiz hover efekti: scale ve width yok, sadece içerik açılır
    setActiveCard(null);
  }, []);

  return (
    <section className="pt-16 md:pt-20">
      <div className="container mx-auto">
        {/* Mobil Görünüm */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {tradingservices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-4xl font-bold text-white opacity-90 shadow-text">
                    {service.number}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Görünüm */}
        <div className="hidden md:grid grid-cols-3 gap-4 h-[400px]">
          {tradingservices.map((service, index) => (
            <Link
              key={index}
              to={service.link || "#"}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`service-card group relative h-full transition-all duration-500 rounded-lg overflow-hidden shadow-xl bg-white cursor-pointer block hover:shadow-3xl hover:shadow-black/30  hover:scale-101 hover:bg-white/90`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute inset-0">
                <img
                  ref={(el) => (imagesRef.current[index] = el)}
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-700 group-hover:bg-black/30"></div>
              </div>

              <div className="relative h-full flex flex-col justify-between p-8 text-white">
                <div className="transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100 opacity-90">
                  <span className="text-6xl md:text-7xl font-bold opacity-20">
                    {service.number}
                  </span>
                  <h2 className="text-2xl font-bold mt-4 leading-tight">
                    {service.title}
                  </h2>
                </div>

                <div
                  className={`transition-all duration-700 transform ${
                    activeCard === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <p className="text-lg font-medium  text-white/90 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingList;
