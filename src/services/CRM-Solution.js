import React from "react";
import ServiceHero from "../component/ServiceHero";
import Sdlc from "../component/Sdlc";
import Technologies from "../component/Technologies";
import ContactHero from "../component/ContactHero";
import { Website } from "../component/Helper";
import Ourwork from "../component/Ourwork";
const CRM = () => {
  return (
    <div>
      <ServiceHero
        backgroundImage="../bg_pattern_service.svg"
        heading=" (CRM) Solutions and Design"
      />
      <div className="max-w-6xl mx-auto my-12 px-6 ">
        <h2 className="text-3xl text-center mt-8 font-bold">
          {" "}
          Customer Relationship Management (CRM) Solutions and Design

</h2>
        <h4  className="text-xl text-center mb-8 "> Enhancing Customer Connections, Boosting Business Success
        </h4>

        <p className="text-base mb-6">
        At Code Cups, we design and implement CRM solutions that redefine customer interactions and streamline your business processes. Our custom CRM systems are built to centralize data, automate workflows, and empower your team with real-time insights—ensuring every customer interaction is meaningful, productive, and personalized.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Our CRM Solutions?</h2>

        <h3 className="font-semibold mb-1">Tailored CRM Design</h3>
        <p className="text-base mb-6">
        Our CRM solutions are uniquely designed to reflect your business's identity and specific operational needs, whether you’re managing sales pipelines, customer support, or marketing automation.
        </p>

        <h3 className="font-semibold mb-1">Data-Driven Insights</h3>
        <p className="text-base mb-6">
        Access detailed analytics and reporting capabilities to gain valuable insights into customer behavior and business performance. With intuitive dashboards, your team can make informed decisions quickly.
        </p>

        <h3 className="font-semibold mb-1">Seamless Integration</h3>
        <p className="text-base mb-6">
        We ensure smooth integration with your existing systems, including ERP, email, marketing, and social media platforms, to create a unified experience across your entire tech ecosystem.
        </p>

        <h3 className="font-semibold mb-1">Enhanced Customer Experience
        </h3>
        <p className="text-base mb-6">
        From streamlined communication to personalized service, our CRM solutions are built to foster customer loyalty and long-term satisfaction by giving you a 360-degree view of each customer.
        </p>

        <h3 className="font-semibold mb-1">Automation and Efficiency</h3>
        <p className="text-base mb-6">
        Automate repetitive tasks, from follow-ups to data entry, freeing up your team to focus on building relationships and closing deals.
        </p>
        <p className="text-base">
        With Code Cups’ CRM Solutions and Design, you’re equipped with a powerful tool to nurture relationships, drive sales, and achieve your growth goals.
        </p>
      </div>
  
      {/* <Sdlc /> */}
      <Technologies tabs={Website}/>
      <ContactHero />
      <Ourwork/>
    </div>
  );
};

export default CRM;
