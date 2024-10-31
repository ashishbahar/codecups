import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";


// service page
import WebsiteDevelopment from "./services/WebsiteDevelopment";
import "./App.css";
import Contact from "./pages/Contact";
import ItManagement from "./services/It-Management";
import SoftwareDevelopment from "./services/SoftwareDevelopment";
import CRM from "./services/CRM-Solution";
import DataTracking from "./services/Data-Tracking";
import AppDevelopment from "./services/AppDevelopment";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* services */}
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/it-management" element={<ItManagement />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} /> 
          <Route path="/crm-Solution" element={<CRM />} /> 
          <Route path="/data-tracking" element={<DataTracking />} /> 
          <Route path="/app-development" element={<AppDevelopment />} /> 


          {/* Add more routes here as needed */}


          <Route path="/Contact" element={<Contact />} /> {/* Services page route */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
