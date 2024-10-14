import React from "react";
import CounterCard from "./CounterCard";

const CounterSection = () => {
  const data = [
    {
      icon: "./counter_logo/logo (2).svg", // Replace with your actual icon path
      number: 5,
      suffix: "+",
      text: "Years of Experience",
    },
    {
      icon: "./counter_logo/logo (3).svg",
      number: 80,
      suffix: "+",
      text: "Success Stories",
    },
    {
      icon: "./counter_logo/logo (1).svg",
      number: 600,
      suffix: "+",
      text: "Companies Trust Us",
    },
    {
      icon: "./counter_logo/logo (4).svg",
      number: 100,
      suffix: "%",
      text: "Results Guaranteed",
    },
  ];

  return (
    // <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-blue-50">
<div className="grid w-full lg:w-2/3 grid-cols-1 sm:grid-cols-2 gap-7">

      {data.map((item, index) => (
        <CounterCard
          key={index}
          icon={item.icon}
          number={item.number}
          suffix={item.suffix}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default CounterSection;
