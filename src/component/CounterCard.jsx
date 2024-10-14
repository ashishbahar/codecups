import React from "react";
import CountUp from "react-countup";

const CounterCard = ({ icon, number, suffix, text }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[85%] mx-auto  lg:p-10 hover:scale-[1.03] duration-200  lg:text-left text-center sm:w-full">
      <div className="py-5">
        <img src={icon} alt="icon" className="lg:mx-0 mx-auto mb-4 h-16 w-16" />
        <div className="text-4xl font-bold text-blue-700">
          <CountUp end={number} suffix={suffix} duration={2} />
        </div>
        <p className="text-gray-600 mt-2">{text}</p>
      </div>
    </div>
  );
};

export default CounterCard;
