import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Equipment from "./pages/Equipment";
import Construction from "./pages/Construction";
import Trading from "./pages/Trading";
import Finance from "./pages/Finance";
import Project from "./pages/Project";
import Consultancy from "./pages/Consultancy";
import Engineering from "./pages/Engineering";
import Licensing from "./pages/Licensing";
import Whoweare from "./pages/Whoweare";
import Contact from "./pages/Contact";
import Clinker from "./pages/Clinker";
import Coal from "./pages/Coal";
import Fuels from "./pages/Fuels";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/equipment-supply-services"
          element={<Equipment />}
        />
        <Route
          path="/services/construction-services"
          element={<Construction />}
        />
        <Route path="/services/trading-services" element={<Trading />} />
        <Route path="/services/finance-solutions" element={<Finance />} />
        <Route path="/services/project-management" element={<Project />} />
        <Route path="/services/consultancy" element={<Consultancy />} />
        <Route path="/services/engineering" element={<Engineering />} />
        <Route path="/services/licensing" element={<Licensing />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/services/trading-services/clinker-cement-trading"
          element={<Clinker />}
        />
        <Route
          path="/services/trading-services/coal-trading"
          element={<Coal />}
        />
        <Route
          path="/services/trading-services/alternative-fuels-trading"
          element={<Fuels />}
        />
      </Routes>
    </div>
  );
};

export default App;
