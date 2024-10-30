import React from 'react';

const ServiceHero = ({ backgroundImage, heading }) => {
  return (
    <div 
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-4xl font-bold"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the image first
        zIndex: 1 // Ensure it's above the gradient
      }}
    > 
        
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#48287c] to-[#00c3cc] to-[#41ba5b] opacity-90 text-white" // Gradient layer
        style={{ zIndex: 0 }} // Make sure it's below the text
      />
     
      <h1 className="text-3xl md:text-4xl lg:text-6xl w-1/2 text-center m-auto" style={{ zIndex: 1 }}>{heading}</h1>
    </div>
  );
};

export default ServiceHero;
