import React from "react";
import ServiceHero from "../component/ServiceHero";
import Sdlc from "../component/Sdlc";
import Technologies from "../component/Technologies";
import ContactHero from "../component/ContactHero";

const WebsiteDevelopment = () => {
  return (
    <div>
      <ServiceHero
        backgroundImage="../bg_pattern_service.svg"
        heading="Website Development"
      />
      <div className="max-w-6xl mx-auto my-12 px-6 ">
        <h2 className="text-3xl text-center mt-8 mb-8">
          {" "}
          Unlock the Full Potential of Your Brand Identity Through Cutting-Edge
          WebSite Development
        </h2>

        <p className="text-base mb-6">
          In today’s digital landscape, your website is more than just an online
          presence; it's a vital extension of your brand identity. At Codecups,
          we specialize in creating modern, responsive websites that not only
          look stunning but also deliver a seamless user experience. Our team
          leverages advanced technologies and innovative strategies to transform
          your vision into reality.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Expertise:</h2>

        <h3 className="font-semibold mb-1">UI/UX Design:</h3>
        <p className="text-base mb-6">
          Our design philosophy centers around user engagement. We create
          intuitive interfaces that ensure your visitors enjoy an easy,
          enjoyable journey through your site. By focusing on user experience,
          we help you turn visitors into loyal customers.
        </p>

        <h3 className="font-semibold mb-1">Angular:</h3>
        <p className="text-base mb-6">
          With Angular, we build dynamic and interactive web applications that
          provide a rich user experience. Our expertise in this powerful
          framework allows us to develop scalable solutions tailored to your
          business needs.
        </p>

        <h3 className="font-semibold mb-1">React / React Native:</h3>
        <p className="text-base mb-6">
          Harness the power of React and React Native to create fast,
          responsive, and cross-platform applications. Whether for web or
          mobile, we craft solutions that adapt seamlessly to different devices,
          ensuring your brand reaches its audience wherever they are.
        </p>

        <h3 className="font-semibold mb-1">Ruby on Rails:</h3>
        <p className="text-base mb-6">
          Our proficiency in Ruby on Rails allows us to develop robust,
          high-performance web applications quickly and efficiently. We
          prioritize clean code and maintainability, ensuring your project is
          built on a solid foundation.
        </p>

        <h3 className="font-semibold mb-1">eCommerce Solutions:</h3>
        <p className="text-base mb-6">
          Elevate your online store with our customized eCommerce solutions. We
          integrate secure payment gateways, user-friendly interfaces, and
          inventory management systems to help you maximize sales and enhance
          the shopping experience for your customers.
        </p>

        <p className="text-base">
          At Codecups, we believe that effective web development is at the heart
          of a successful digital strategy. Let us help you unlock your brand's
          full potential with our comprehensive web development services.
        </p>
      </div>
  
      <Sdlc />
      <Technologies />
      <ContactHero />
    </div>
  );
};

export default WebsiteDevelopment;
