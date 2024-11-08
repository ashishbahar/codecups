import React from "react";
import Marquee from "react-fast-marquee";
import { clientLogos } from "./Helper";
import CounterSection from "./Counter";

const Ourwork = () => {
  return (
    <div className="bg-[#e3f0ff]">
      <div className=" min-container p-0 pt-5">
        <div className=" py-[30px]">
          <h3 className="text-xl text-center text-black">
            <span className="bg-[#f44e4ee2] text-white px-1 mr-1 font-medium rounded-sm">
              Brand We
            </span>
            Work With
          </h3>
          <div className=" pt-5 sm:pt-10">
            <Marquee>
              {clientLogos.map((logoSrc, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-[200px] h-[100px] mx-[20px]  border rounded-lg"
                >
                  <img
                    alt={`client-logo-${index}`}
                    src={logoSrc}
                    className="h-full object-contain"
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
  );
};

export default Ourwork;
