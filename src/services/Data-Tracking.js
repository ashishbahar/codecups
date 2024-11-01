import React from "react";
import ServiceHero from "../component/ServiceHero";
import Sdlc from "../component/Sdlc";
import Technologies from "../component/Technologies";
import ContactHero from "../component/ContactHero";
import { Website } from "../component/Helper";
import Ourwork from "../component/Ourwork";
const DataTracking = () => {
  return (
    <div>
      <ServiceHero
        backgroundImage="../bg_pattern_service.svg"
        heading="Data Tracking Security"
      />
      <div className="max-w-6xl mx-auto my-12 px-6 ">
        <h2 className="text-3xl text-center mt-8 font-bold">
          {" "}
          Data Tracking Security
        </h2>
        <h4 className="text-xl text-center mb-8 ">
          {" "}
          Protecting Your Data with Advanced Security Measures
        </h4>

        <p className="text-base mb-6">
          In today’s data-driven world, securing sensitive information is
          essential. Code Cups’ Data Tracking Security solutions offer a
          comprehensive approach to safeguard your data as it flows through
          systems, applications, and networks. We combine advanced encryption,
          real-time monitoring, and compliance-focused protocols to ensure that
          your data remains protected at every stage.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Key Features of Our Data Tracking Security Solutions</h2>

        <h3 className="font-semibold mb-1">End-to-End Encryption:</h3>
        <p className="text-base mb-6">
        Secure data as it travels across networks with end-to-end encryption, making sure that only authorized users have access, even when data is in transit.
        </p>

        <h3 className="font-semibold mb-1">Real-Time Monitoring and Alerts</h3>
        <p className="text-base mb-6">
        With continuous monitoring, we detect and respond to unusual activities immediately, ensuring timely protection against potential threats.
        </p>

        <h3 className="font-semibold mb-1">Data Access Controls</h3>
        <p className="text-base mb-6">
        We implement role-based access controls and multi-factor authentication, allowing only authorized personnel to access critical information and protecting against unauthorized data exposure.
        </p>

        <h3 className="font-semibold mb-1">Compliance with Industry Standards</h3>
        <p className="text-base mb-6">
        Our solutions align with industry regulations, including GDPR, HIPAA, and SOC 2, helping your business maintain compliance while safeguarding sensitive information.
        </p>

        <h3 className="font-semibold mb-1">Automated Data Auditing</h3>
        <p className="text-base mb-6">
        Regular, automated data audits track changes and monitor data usage patterns, enabling you to stay informed of any potential security risks.
        </p>

        <p className="text-base">
        With Code Cups' Data Tracking Security solutions, you can confidently manage and track your data, knowing that every precaution is in place to protect your organization’s most valuable asset.
        </p>
      </div>

      {/* <Sdlc /> */}
      <Technologies tabs={Website} />
      <ContactHero />
      <Ourwork/>
    </div>
  );
};

export default DataTracking;
