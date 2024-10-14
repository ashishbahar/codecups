import React from "react";
import Marquee from "react-fast-marquee";
import CounterSection from "../component/Counter";
import HeroSection from "../component/HeroSection";
const clientLogos = [
  "./client/client (1).png",
  "./client/client (1).svg",
  "./client/client (1).webp",
  "./client/client (2).png",
  "./client/client (2).webp",
  "./client/client (3).png",
  "./client/client (3).svg",
  "./client/client (4).png",
  "./client/client (4).webp",
  "./client/client (6).png",
];
const Home = () => {
  return (
    <div className=" bg-white">
      <div className="container ">
        <div className="  md:px-4 flex  lg:flex-row flex-col bg-white   lg:pt-[5px] ">
          <div className=" px-[16px] py-[25px] lg:w-3/5 w-full md:rounded-xl lg:px-[100px]  bg-[#e3f0ff] lg:py-[80px] ">
            <p className=" text-black text-sm mb-4 mt-4 ">
              👋 Hi We Are
              <span className="bg-[#f44e4ee2] text-white px-1 font-medium rounded-sm">
                CodeCups
              </span>
            </p>
            <h1 className=" text-[#0b0b2b]  font-bold text-3xl lg:text-5xl lg:pr-[100px] ">
              Grow your Business Organic & IT Solution Technology
            </h1>
            <p className=" mt-5 text-md text-[#4b4a4bee] font-medium ">
              In today's competitive business, the demand for efficient and
              cost-effective IT solutions has never been more critical.
            </p>
            <button className=" bg-[#3333f8dd] font-semibold duration-200 hover:bg-[#e3f0ff] border-[2px] border-[#3333f8dd] hover:text-[#3333f8dd] text-white px-[50px] py-[14px] outline-none mt-[30px] rounded-[20px]">
              Get Started
            </button>
          </div>
          <HeroSection />
        </div>

        {/*////////////////////// Brand We Work With \\\\\\\\\\\\\\\\\\\\\\\*/}
        <div className=" md:py-[40px] pb-[30px] mt-10 bg-[#e3f0ff] ">
          <div className=" min-container">
            <div className=" py-[30px]">
              <h3 className="text-xl text-center text-black">
                <span className="bg-[#f44e4ee2] text-white px-1 font-medium rounded-sm">
                  Brand We
                </span>
                Work With
              </h3>
              <div className=" pt-10">
                <Marquee>
                  {clientLogos.map((logoSrc, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center w-[200px] h-[100px] mx-[20px] bg-gray-100 border rounded-lg"
                    >
                      <img
                        alt={`client-logo-${index}`}
                        src={logoSrc}
                        className="w-auto h-full object-contain"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            {/* ///////////////////////Section 3\\\\\\\\\\\\\\\\\\\\ */}
            <div className=" lg:py-10">
              <div className="flex h-100  justify-between py-10">
                <CounterSection />
                <div className="hide-below-1024 w-2/6 ps-10">
                  <img
                    src="./chines.webp"
                    alt="chinesman"
                    className="w-full h-[600px] rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
