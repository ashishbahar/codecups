import React from "react";
import CountUp from "react-countup";

const CounterCard = ({ icon, number, suffix, text }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 lg:text-left text-center w-full">
      <img src={icon} alt="icon" className="lg:mx-0 mx-auto mb-4 h-16 w-16" />
      <div className="text-4xl font-bold text-blue-700">
        <CountUp end={number} suffix={suffix} duration={2} />
      </div>
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
};

export default CounterCard;
