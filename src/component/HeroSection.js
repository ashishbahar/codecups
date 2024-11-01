import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Counter component
const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Counter duration in milliseconds
    const incrementTime = Math.abs(Math.floor(duration / end));

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8">
      {/* Top Left Section */}
      <div
        className="relative  bg-blue-500 text-white rounded-lg"
        style={{
          backgroundImage: `url('./mobile.webp')`, // Replace with your image path
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the image
        }}
      ></div>

      {/* Top Right Section */}
      <div className="relative bg-orange-400 text-white p-8 rounded-lg flex flex-col justify-center items-center lg:rounded-l-full">
        <div className="text-6xl font-bold">
          <Counter end={150} suffix="+" />
        </div>
        <p className="mt-4 text-lg">Serving clients in 150+ countries worldwide</p>
        <div className="flex mt-4 ">
          <img
            src="./avatar (1).webp" // Replace with avatars
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <img
            src="./avatar (2).webp"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <img
            src="./avatar (3).webp"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white text-lg bg-blue-600 px-2 py-1 rounded-full">
            5k+
          </span>
        </div>
      </div>

      {/* Bottom Left Section */}
      <div className="relative bg-pink-400 text-white p-8 rounded-lg flex flex-col justify-center items-start lg:rounded-tr-custom-small">
        <Link to="/crm-Solution" className="text-lg font-semibold bg-white text-pink-600 rounded-full px-4 py-2 mb-2">
          CRM Solution
        </Link>
        <Link to="/website-development" className="text-lg font-semibold bg-white text-pink-600 rounded-full px-4 py-2 mb-2">
          Web Development
        </Link>
        <Link to="/app-development" className="text-lg font-semibold bg-white text-pink-600 rounded-full px-4 py-2">
          App Development and more
        </Link>
      </div>

      {/* Bottom Right Section */}
      <div
        className="relative  bg-blue-600 text-white p-8 rounded-lg flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('./it_solution_hero_image.webp')`, // Replace with your image path
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the image
        }}
      >
        <div className="text-6xl font-bold">
          <Counter end={100} suffix="%" />
        </div>
        <p className="mt-4 text-lg">
        Delivering top-notch service quality that ensures 100% client satisfaction!        </p>
      </div>
    </div>
  );
};

export default HeroSection;
