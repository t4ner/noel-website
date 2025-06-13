import React from "react";
import officeImage from "/contact/office-map.png";
const OfficeMaps = () => {
  return (
    <div className="container mx-auto flex gap-20 items-center pt-20">
      <div className="flex-1">
        <p className="font-medium">OUR OFFICES</p>
        <ul className="space-y-3 mt-5">
          <li>
            Zorlu Center R2 Blok T029 Levazim Mh. Vadi Sk. 34340 Beşiktaş /
            İstanbul
          </li>
          <li>
            MOSCOW - Address: 115114, Moscow, st. Letnikovskaya, 10, building 4,
            floor 5, room I, rooms No. 34,40
          </li>
          <li>
            BEIJING - Address: Room No. 805 Beijing ONE Tower No. 59 Zhongshan
            St.,TongZhou Dist., Beijing 101100, P.R.China
          </li>
          <li>ATHENS</li>
          <li>
            DUBAI - Address: Business Center, Dubai Word Central, PO BOX 390667,
            Dubai, United Arab Emirates
          </li>
          <li>
            ISTANBUL - Address: Esentepe Mh. Büyükdere Cd. Astoria Blok No:127 A
            İç Kapı No:33 Şişli İSTANBUL
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <img src={officeImage} alt="" />
      </div>
    </div>
  );
};

export default OfficeMaps;
