import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./component/Header";


// service page
import WebsiteDevelopment from "./services/WebsiteDevelopment";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Website-development" element={<WebsiteDevelopment />} /> {/* Services page route */}
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
