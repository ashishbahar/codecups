import React, { useEffect, useState } from 'react';

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

  return <span>{count}{suffix}</span>;
};

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-8">
      {/* Top Left Section */}
      <div className="relative bg-blue-500 text-white rounded-lg"
       style={{
        backgroundImage: `url('./mobile.webp')`, // Replace with your image path
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
      }}>
    
      </div>

      {/* Top Right Section */}
      <div className="relative bg-orange-400 text-white p-8 rounded-lg flex flex-col justify-center items-center rounded-l-full">
        <div className="text-6xl font-bold">
          <Counter end={150} suffix="+" />
        </div>
        <p className="mt-4 text-lg">Worldwide Country has lots of clients</p>
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
          <span className="text-white text-lg bg-blue-600 px-2 py-1 rounded-full">5k+</span>
        </div>
      </div>

      {/* Bottom Left Section */}
      <div className="relative bg-pink-400 text-white p-8 rounded-lg flex flex-col justify-center items-start rounded-tr-custom-small">
        <button className="text-lg font-semibold bg-white text-pink-600 rounded-full px-4 py-2 mb-2">
          Data Security
        </button>
        <button className="text-lg font-semibold bg-white text-pink-600 rounded-full px-4 py-2 mb-2">
          Web Development
        </button>
        <button className="text-lg font-semibold bg-white text-pink-600 rounded-full px-4 py-2">
          Analytics & Optimization
        </button>
      </div>

      {/* Bottom Right Section */}
      <div className="relative bg-blue-600 text-white p-8 rounded-lg flex flex-col justify-center items-center"
       style={{
        backgroundImage: `url('./it_solution_hero_image.webp')`, // Replace with your image path
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
      }}>
        <div className="text-6xl font-bold">
          <Counter end={88} suffix="%" />
        </div>
        <p className="mt-4 text-lg">get 88% of the best services and growth business</p>
      </div>
    </div>
  );
};

export default HeroSection;
