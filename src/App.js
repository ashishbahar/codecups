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
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Scroll from "./component/Scroll";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <Router>
      <div>
      <Scroll/>
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
          <Route path="/about" element={<About />} /> {/* Services page route */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Services page route */}
          <Route path="/Career" element={<Career />} /> {/* Services page route */}
          <Route path="/Contact" element={<Contact />} /> {/* Services page route */}

        </Routes>
        <Footer/>

      </div>
    </Router>
  );
};

export default App;
