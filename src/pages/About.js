// AboutUs.js

import React from "react";
import Ourwork from "../component/Ourwork";
import ContactHero from "../component/ContactHero";
import ServiceHero from "../component/ServiceHero";
import { Link } from "react-router-dom";
import ContactSection from "../component/ContactSection";

const About = () => {
  return (
    <>
      <ServiceHero
        backgroundImage="../bg_pattern_service.svg"
        heading="About Us"
      />
      <div className="bg-white py-10">
        <div className="grid  grid-cols-1 lg:grid-cols-2  lg:gap-10 px-8">
          <div className=" relative">
            <div className="absolute top-10 left-[10%]">
              <img
                className="world_animate md:w-[80px] w-[50px] "
                src="./world.webp"
                alt="world"
              />
            </div>
            <img src="./Section4homepage.webp" alt="Section4homepage" />
          </div>
          <div className="lg:ps-10 pt-4">
            <h3 className="text-black ps-2 text-sm">
              We are 😃
              <span className="bg-[#f44e4ee2] text-white px-1 font-medium rounded-sm">
                CodeCups
              </span>
            </h3>
            
            <p className=" text-[#383838e6] lg:pe-10 md:pt-5 pt-3 md:text-xl text-md font-semibold">
              At CodeCups, our commitment to client satisfaction is at the core
              of everything we do. We understand clients' success.
            </p>
            <ul className=" ps-5 pt-5 mb-6">
              <li className="list-disc text-[#383838e6] text-md md:text-lg font-medium ">
                Grow your business the right way.
              </li>
              <li className="list-disc py-2 sm:py-3 text-[#383838e6] text-md md:text-lg font-medium ">
                Let business growth help your business grow.
              </li>
              <li className="list-disc text-[#383838e6] text-md md:text-lg font-medium ">
                Helping you to get better.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="bg-blue-50 py-12 px-8 md:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* History Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <span className="text-blue-500 text-4xl">📜</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Our History
            </h3>
            <p className="text-gray-600">
              Since 1997 we have been a visionary and a reliable software
              engineering partner for world-class brands.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <span className="text-orange-500 text-4xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              A mission statement clarifies what the company wants to achieve,
              who they want to support, and why they want to support them.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <span className="text-pink-500 text-4xl">👁️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              A vision statement focuses on the potential inherent in the
              company’s future, about what they intend to become.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center bg-blue-50 p-8 md:p-16 rounded-lg">
        {/* Left Side - Image/Illustration */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 p-8">
          <img
            src="../about.webp"
            alt="Team Presentation"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 space-y-4">
          <div className="text-sm text-red-500 font-bold">Why Us</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Why Our Services are Better Than Others?
          </h2>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-blue-500 text-xl">✅</span>
              <p className="font-semibold text-gray-700">Quality Comes First</p>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-blue-500 text-xl">🌿</span>
              <p className="font-semibold text-gray-700">
                Flexible Cooperation
              </p>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-blue-500 text-xl">📦</span>
              <p className="font-semibold text-gray-700">On-time Delivery</p>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-blue-500 text-xl">🧾</span>
              <p className="font-semibold text-gray-700">Transparent Costs</p>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-blue-500 text-xl">💻</span>
              <p className="font-semibold text-gray-700">
                Qualified Developers
              </p>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-blue-500 text-xl">🚀</span>
              <p className="font-semibold text-gray-700">Quick Scale-up</p>
            </div>
          </div>
        </div>
      </section>
      <Ourwork />
      <ContactHero />
      {/* <ContactSection/> */}
    </>
  );
};

export default About;
