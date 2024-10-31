import React from "react";
import ServiceHero from "../component/ServiceHero";
import Technologies from "../component/Technologies";
import ContactHero from "../component/ContactHero";
import { Website } from "../component/Helper";
const ItManagement = () => {
  return (
    <div>
      <ServiceHero
        backgroundImage="../bg_pattern_service.svg"
        heading="IT Management"
      />
      <div className="max-w-6xl mx-auto my-12 px-6 ">
        <h2 className="text-3xl text-center mt-8 font-bold">
          {" "}
          IT Management
        </h2>
        <h4  className="text-xl text-center mb-8 ">our award-winning IT management services prioritize an all-encompassing approach to technology
        </h4>

        <p className="text-base mb-6">
        We’re passionate about viewing challenges from every angle, transforming complex issues into streamlined, human-centered solutions. Our team is dedicated to aligning IT infrastructure with universal values of simplicity, reliability, and growth. From proactive monitoring and troubleshooting to strategic planning, we ensure your systems run seamlessly, enabling your business to focus on expansion without the hurdles of IT complexity. With Code Cups, every solution is crafted to expand your possibilities, empowering your team with technology that just works.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Expertise:</h2>

        <h3 className="font-semibold mb-1">IT Infrastructure Management:</h3>
        <p className="text-base mb-6">
        Monitoring and managing hardware, software, networks, servers, and other critical IT resources.
        Ensuring uptime, availability, and optimal performance of IT assets.
        </p>

        <h3 className="font-semibold mb-1">Network Management:</h3>
        <p className="text-base mb-6">
        Managing LAN, WAN, VPNs, and wireless networks.
        Security monitoring, bandwidth optimization, and troubleshooting connectivity issues.
        </p>

        <h3 className="font-semibold mb-1">Help Desk and Technical Support:</h3>
        <p className="text-base mb-6">
        Offering end-user support via help desk services for troubleshooting and resolving issues.
        Providing multi-tiered support levels to handle everything from simple user queries to advanced technical problems.
        </p>

        <h3 className="font-semibold mb-1">Cybersecurity Management:</h3>
        <p className="text-base mb-6">
        Protecting the organization's data, systems, and networks from cyber threats.
        Implementing firewalls, antivirus, intrusion detection, and response protocols.
        </p>

        <h3 className="font-semibold mb-1">Cloud Management Services:</h3>
        <p className="text-base mb-6">
        Managing cloud infrastructure and applications (e.g., AWS, Azure, Google Cloud).
        Optimizing cloud resources, managing costs, and ensuring scalability and security.
        </p>

        <p className="text-base">
        By offering these services, an IT management provider like Code Cups can enable businesses to streamline their IT operations, reduce downtime, enhance security, and focus on core activities for growth and success.
        </p>
      </div>
  
      {/* <Sdlc /> */}
      <Technologies tabs={Website}/>
      <ContactHero />
    </div>
  );
};

export default ItManagement;
