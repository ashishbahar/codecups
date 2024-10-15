import React from "react";
import Marquee from "react-fast-marquee";
import CounterSection from "../component/Counter";
import HeroSection from "../component/HeroSection";
const clientLogos = [
  "./client/1.png",
  "./client/2.png",
  "./client/3.png",
  "./client/4.png",
  "./client/5.png",
  "./client/6.png",
  "./client/7.png",
  "./client/8.png",
  "./client/9.png",
  "./client/10.png",
  "./client/11.png",
  "./client/12.png",
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
                      className="flex justify-center items-center w-[200px] h-[100px] mx-[20px]  border rounded-lg"
                    >
                      <img
                        alt={`client-logo-${index}`}
                        src={logoSrc}
                        className="w-3/4 h-full object-contain"
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
          {/* //////////////////////Section 4/\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className="bg-white py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-10 px-8">
              <div className=" relative">
                <div className="absolute top-10 left-[10%]">
                  <img
                    className="world_animate"
                    width={80}
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
                  </span>{" "}
                </h3>
                <h2 className=" tracking-tighter text-5xl pt-1 text-[#020842] font-semibold">
                  Our Commitment to Client Satisfaction
                </h2>
                <p className=" text-[#383838e6] pe-10 pt-5 text-xl font-semibold">
                  At CodeCups, our commitment to client satisfaction is at the
                  core of everything we do. We understand clients' success.
                </p>
                <ul className=" ps-5 pt-5">
                  <li className="list-disc text-[#383838e6]  text-lg font-medium ">
                    Grow your business the right way.
                  </li>
                  <li className="list-disc py-3 text-[#383838e6]  text-lg font-medium ">
                    Let business growth help your business grow.
                  </li>{" "}
                  <li className="list-disc text-[#383838e6]  text-lg font-medium ">
                    Helping you to get better.
                  </li>
                </ul>
                <button className=" bg-[#3333f8dd] font-semibold duration-200 hover:bg-[#fff] border-[2px] border-[#3333f8dd] hover:text-[#3333f8dd] text-white px-[50px] py-[14px] outline-none mt-[30px] rounded-[20px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
