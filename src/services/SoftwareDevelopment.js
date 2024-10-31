import React from "react";
import ServiceHero from "../component/ServiceHero";
import Sdlc from "../component/Sdlc";
import Technologies from "../component/Technologies";
import ContactHero from "../component/ContactHero";
import { Website } from "../component/Helper";
const SoftwareDevelopment = () => {
  return (
    <div>
      <ServiceHero
        backgroundImage="../bg_pattern_service.svg"
        heading="Software Development"
      />
      <div className="max-w-6xl mx-auto my-12 px-6 ">
        <h2 className="text-3xl text-center mt-8 font-bold">
          {" "}
          Software Development
        </h2>
        <h4  className="text-xl text-center mb-8 ">Elevate your business with our custom-built software solutions, crafted with precision to spark transformative progress.


        </h4>

        <p className="text-base mb-6">
        Comprehensive, End-to-End Custom Software Development Solutions
        From concept to deployment, we offer a full-cycle development approach tailored to your unique business requirements. Our expertise ensures applications that deliver meaningful impact and meet every specification.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Expertise:</h2>

        <h3 className="font-semibold mb-1">Software Consulting Services
        </h3>
        <p className="text-base mb-6">
        Empower your team with a skilled blend of designers and developers who bring your vision to life with an unmatched commitment to quality.
        </p>

        <h3 className="font-semibold mb-1">Custom Software Development Services</h3>
        <p className="text-base mb-6">
        Strong brand identity is essential, whether you're refreshing an established business or building a new one from the ground up. We create custom software that captures your brand essence and strengthens your market presence.


        </p>

        <h3 className="font-semibold mb-1">Enterprise Software Development Services</h3>
        <p className="text-base mb-6">
        Our innovative design elements and thoughtful typography create powerful and lasting impressions, essential for enterprise applications that make a difference.
        </p>

        <h3 className="font-semibold mb-1">API Development Services</h3>
        <p className="text-base mb-6">
        Crafted with a dynamic, multi-toned aesthetic, our API solutions are ideal for creating lasting online business platforms with visually appealing, functionally robust connections.
        </p>

       
      </div>
  
      {/* <Sdlc /> */}
      <Technologies tabs={Website}/>
      <ContactHero />
    </div>
  );
};

export default SoftwareDevelopment;
