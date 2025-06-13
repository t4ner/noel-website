import React, { useState } from "react";

const WhowearePartner = () => {
  const [activeTab, setActiveTab] = useState("references");

  const references = [
    "SOMA 4000TPD Cement Plant Project",
    "Sönmez Cement 5000 TPD EP Supply",
    "Göltas 12MW Waste Heat Energy Power Plant",
    "Kipas 8MW Waste Heat Energy Power Plant",
    "TOROS Port/TEKFEN Yumurtalık-ADANA",
    "MEDCEM Shiploader and Conveyor Systems",
    "SÖNMEZ Shiploader and Ports Project",
    "BATI SÖKE Pipe Conveyor Project",
    "Oyak Adana 600tph Crusher with apron feeder, Preblending Equipment Gokay Insaat Madencilik",
    "Algerian Φ3.2X13m Ball Mill System Project",
    "EP+S new production line",
    "Paper Bag Production line construction",
    "OYAK Abidjan Coal Grinding Station Construction",
    "QCC4 5500TPD Clinker Production Line Project",
  ];

  const partners = [
    { name: "BEDESCHI", link: "https://www.bedeschi.com/" },
    { name: "SCT", link: "http://en.sinocemtech.com/" },
    { name: "CHMC", link: "https://en.chmc.cc/" },
    {
      name: "CHMC-SINOMACH HE",
      link: "http://en.sinomach-he.cn/channels/4718.html#brand",
    },
    { name: "SINOTOP", link: "http://www.sd-top.com/" },
    { name: "SASPG", link: "https://www.saspg.com/en" },
    { name: "CTP-CTN", link: "https://www.ctn-group.com/" },
  ];
  return (
    <div className="container mx-auto">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab("references")}
          className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
            activeTab === "references"
              ? "bg-gray-200 text-black shadow-lg shadow-blue-100"
              : "bg-gray-100 text-gray-600 "
          }`}
        >
          <div className=" flex items-center justify-center">
            <img
              src="/svg/bluepin.svg"
              className="w-10 h-10"
              alt="References icon"
            />
          </div>
          REFERENCES
        </button>
        <button
          onClick={() => setActiveTab("partners")}
          className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
            activeTab === "partners"
              ? "bg-gray-200 text-black shadow-lg shadow-blue-100"
              : "bg-gray-100 text-gray-600 "
          }`}
        >
          <div className=" flex items-center justify-center">
            <img
              src="/svg/blackpin.svg"
              className="w-8 h-8"
              alt="Partners icon"
            />
          </div>
          PARTNERS
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        {activeTab === "references" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((item, index) => (
              <div
                key={index}
                className="group p-4 rounded-xl bg-gray-50  transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700  text-base">{item}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center group transition-all duration-300 border border-gray-100 hover:shadow-lg hover:border-gray-200"
              >
                <div className="flex flex-col items-center gap-2">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 font-medium text-sm  transition-colors"
                  >
                    {partner.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhowearePartner;
