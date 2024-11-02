import React from "react";
import Marquee from "react-fast-marquee";
import CounterSection from "../component/Counter";
import HeroSection from "../component/HeroSection";
import { boxes, clientLogos } from "../component/Helper";
import { Link } from "react-router-dom";
import Ourwork from "../component/Ourwork";


const Home = () => {
  return (
    <div className=" bg-white">
      <div className="h-[50px]"></div>
      <div className="container">
        <div className="  md:px-4 flex  lg:flex-row flex-col bg-white   lg:pt-[5px] ">
          <div className=" px-[16px] py-[25px] lg:w-4/5 w-full md:rounded-xl lg:px-[100px]  bg-[#e3f0ff] lg:py-[80px] ">
            <p className=" text-black text-sm mb-4 mt-4 ">
              👋  We Are
              <span className="bg-[#f44e4ee2] text-white px-1 font-medium rounded-sm">
                CodeCups
              </span>
            </p>
            <h1 className=" text-[#0b0b2b]  font-bold text-3xl lg:text-5xl lg:pr-[10px] ">
            Grow Your Business Potential with Smart IT Solutions
            </h1>
            <p className=" mt-5 text-md text-[#4b4a4bee] font-medium ">
            In today’s fast-paced world, your success relies on effective and affordable IT strategies. Let us help your business grow and shine!
            </p>
            <button className=" bg-[#3333f8dd] font-semibold duration-200 hover:bg-[#e3f0ff] border-[2px] border-[#3333f8dd] hover:text-[#3333f8dd] text-white px-[30px] md:px-[50px] py-[8px] md:py-[14px]  outline-none mt-[30px] mb-[10px] rounded-[20px]">
              Get Started Today
            </button>
          </div>
          <HeroSection />
        </div>

        {/*////////////////////// Brand We Work With \\\\\\\\\\\\\\\\\\\\\\\*/}
        <div className=" md:py-[40px] pb-[30px] bg-[#e3f0ff] ">
         
          {/* //////////////////////Section 4/\\\\\\\\\\\\\\\\\\\\\\\ */}
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
                <h2 className=" tracking-tighter lg:text-5xl text-3xl pt-1 text-[#020842] font-semibold">
                  Our Commitment to Client Satisfaction
                </h2>
                <p className=" text-[#383838e6] lg:pe-10 md:pt-5 pt-3 md:text-xl text-md font-semibold">
                  At CodeCups, our commitment to client satisfaction is at the
                  core of everything we do. We understand clients' success.
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
                <Link to="/contact" className=" bg-[#3333f8dd] font-semibold duration-200 hover:bg-[#fff] border-[2px] border-[#3333f8dd] hover:text-[#3333f8dd] text-white px-[30px] md:px-[50px] py-[8px] md:py-[14px] outline-none mt-[30px] rounded-[20px]">
                 Work With Us
                </Link>
              </div>
            </div>
            <div className="md:p-10">
              <div className="grid pt-10 grid-cols-1 lg:grid-cols-3  lg:gap-10">
                <div className="flex  items-center mb-4">
                  <div className=" bg-[#f3baba6c] p-5 rounded-lg">
                    <img
                      width={30}
                      className=" "
                      src="./usericonsection4.svg"
                      alt="usericonsection4"
                    />
                  </div>
                  <div className="ps-4">
                    <p className=" text-2xl text-black font-medium ">
                      Expert Team Members
                    </p>
                    <p className=" text-[#474646] font-normal mt-1 text-md">
                      We take pride in assembling a diverse and highly skilled.
                    </p>
                  </div>
                </div>
                <div className="flex  items-center mb-4">
                  <div className=" bg-[#f3baba6c] p-5 rounded-lg">
                    <img
                      width={40}
                      className=" "
                      src="./headphonesection4.svg"
                      alt="headphonesection4"
                    />
                  </div>
                  <div className="ps-4">
                    <p className=" text-2xl text-black font-medium ">
                      Fastest Customer Service
                    </p>
                    <p className=" text-[#474646] font-normal mt-1 text-md">
                      We pride ourselves on providing the fastest customer
                      service industry.
                    </p>
                  </div>
                </div>
                <div className="flex  items-center mb-4">
                  <div className=" bg-[#f3baba6c] p-5 rounded-lg">
                    <img
                      width={40}
                      className=" "
                      src="./dollarsection4.svg"
                      alt="usericonsection4"
                    />
                  </div>
                  <div className="ps-4">
                    <p className=" text-2xl text-black font-medium ">
                      Reasonable Pricing
                    </p>
                    <p className=" text-[#474646] font-normal mt-1 text-md">
                      We believe in providing reasonable pricing that offers
                      exceptional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /////////////// sction5  Our Specialize\\\\\\\\\\\\\\\\\\\ */}
            <div className="py-10">
              <div className=" min-container ">
                <h3 className="text-black lg:pt-10 ps-2 text-sm text-center">
                  Our
                  <span className="bg-[#f44e4ee2] text-white px-1 ms-1 font-medium rounded-sm">
                    Specialize
                  </span>
                </h3>
                <h2 className="tracking-tighter lg:text-5xl text-3xl pt-1 text-[#020842] font-semibold text-center">
                  Featured Services
                </h2>
                <div className="grid mt-10 gap-4">
                  {/* First Row: 2 Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {boxes.slice(0, 2).map((box) => (
                      <div
                        key={box.id}
                        className="relative pt-[250px] p-4 py-10 rounded-xl shadow overflow-hidden transform transition-transform duration-300 hover:scale-[.98] group"
                      >
                        <Link to={box.url}>
                          <div
                            style={{
                              backgroundImage: `url(${box.imageUrl})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            className="absolute  inset-0 transform transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="relative z-10 text-white text-4xl px-4 font-semibold">
                            <p className="mt-10 pt-10">{box.content}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Second Row: 3 Boxes */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                    {boxes.slice(2).map((box) => (
                      <div
                        key={box.id}
                        className="relative pt-[250px] p-4 py-10 rounded-xl shadow overflow-hidden transform transition-transform duration-300 hover:scale-[.98] group"
                      >
                        <Link to={box.url}>
                          <div
                            style={{
                              backgroundImage: `url(${box.imageUrl})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            className="absolute inset-0 transform transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="relative z-10 text-white text-4xl px-4 font-semibold">
                            <p className="mt-10 pt-10">{box.content}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

         <Ourwork/>
          {/* ///////////////////// Section 5\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
