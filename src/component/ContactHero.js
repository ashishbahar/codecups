import React from "react";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-4xl font-bold"
      style={{
        backgroundImage: "url('../contact_bg.webp')", // Set the image first
        zIndex: 1, // Ensure it's above the gradient
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#48287c] to-[#101819] to-[#41ba5b] opacity-90 text-white" // Gradient layer
        style={{ zIndex: 0 }} // Make sure it's below the text
      />
      <div className="text-center" style={{ zIndex: 1 }}>
        <h4 className="text-4xl font-bold mb-4">
          Have a project in mind? Let’s make it a reality.
        </h4>
        <p className="text-lg mb-7">
          Our team of experts is here to work with you at every stage of the
          process, from the initial consultation all the way through to
          implementation.
        </p>

        <Link
          to="/"
          className=" bg-[#3333f8dd]  font-semibold duration-200 hover:bg-[#e3f0ff] border-[2px] border-[#3333f8dd] hover:text-[#3333f8dd] text-white px-10 py-3 outline-none  rounded-[20px] text-xl"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default ContactHero;
{
  /* <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('../contact_bg.webp')" }}>
</div> */
}
