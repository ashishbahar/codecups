import React from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className=" bg-white">
      <div className="container ">
        <div className="  md:px-4 flex flex-lg-row flex-col-reverse bg-white   lg:pt-[50px] ">
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
                  <div className=" w-[200px] h-[80px] mx-[20px]">
                    <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>
                  </div>
                  <div className=" w-[200px] h-[80px] mx-[20px]">
                  <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>

                  </div>
                  <div className=" w-[200px] h-[80px] mx-[20px]">
                  <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>

                  </div>
                  <div className=" w-[200px] h-[80px] mx-[20px]">
                  <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>

                  </div>
                  <div className=" w-[200px] h-[80px] mx-[20px ">
                  <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>

                  </div>
                  <div className=" w-[200px] h-[80px] mx-[20px]">
                  <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>

                  </div>
                  <div className=" w-[200px] h-[80px] mx-[20px]">
                  <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>

                  </div>
                  <div className=" w-[200px] h-[80px] mx-[20px]">
                  <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>

                  </div>
                  <div className=" w-[200px] h-[80px] mx-[20px">
                  <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>

                  </div>
                  <div className=" w-[200px] h-[80px] mx-[20px]">
                  <img alt="client" src="./client/client (1).png" className="w-full h-full object-cover"/>

                  </div>
                </Marquee>
              </div>
            </div>

            {/* ///////////////////////Section 3\\\\\\\\\\\\\\\\\\\\ */}
            <div className=" lg:py-10">
              <div className="flex py-10">
                <div className="grid w-3/5 grid-cols-1 sm:grid-cols-2 gap-7">
                  <div className="bg-blue-500 text-white h-[250px] p-8 rounded-lg shadow-lg">
                    Box 1
                  </div>
                  <div className="bg-green-500 text-white h-[250px] p-8 rounded-lg shadow-lg">
                    Box 2
                  </div>
                  <div className="bg-red-500 text-white p-8 h-[250px] rounded-lg shadow-lg">
                    Box 3
                  </div>
                  <div className="bg-yellow-500 text-white p-8 h-[250px] rounded-lg shadow-lg">
                    Box 4
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
