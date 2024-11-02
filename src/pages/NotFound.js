import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
<img src="../404.PNG" alt="website page" className="w-fit h-fit"/>      <h2 className="text-2xl font-semibold text-gray-700 mb-6">We Are Working On it </h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you are looking for is <strong>UNDER CONSTRUCTION.</strong>
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
