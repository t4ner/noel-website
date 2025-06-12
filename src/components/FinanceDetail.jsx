import React from "react";
import financeImage from "/services/category-4.jpg";
const FinanceDetail = () => {
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
              src={financeImage}
              className="absolute inset-0 w-full h-full object-fill"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
            <div className="max-w-xl">
              <p className="text-sm lg:text-lg font-medium uppercase">
                Services we have provided in the Cement Sectors
              </p>
              <p className="text-sm lg:text-base mt-3">
                Turnkey Cement Plants commitments EP +C + F (Financing) We offer
                a unique EPС+F business model
              </p>
              <p className="font-medium text-sm lg:text-lg py-3">FINANCING ALTERNATIVES</p>
             <ul className="space-y-2">
              <li>Bank Loan</li>
              <li>Private Fund Credit</li>
              <li>Equity Participation</li>
              <li>EXIM Bank Loan</li>
             </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDetail;
