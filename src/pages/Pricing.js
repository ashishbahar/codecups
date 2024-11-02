import React, { useState } from "react";
import ServiceHero from "../component/ServiceHero";

const Pricing = () => {
  // Define services and base prices
  const services = {
    "Website Development": {
      technologies: ["HTML", "React", "Next.js", "WordPress", "Wix", "Webflow"],
      addOns: { plugin: 800, products: 5 }, // Plugins cost $800, products cost $5 each
    },
    "Dynamic Projects": {
      technologies: ["Node", "PHP", "Python", "Java"],
    },
    "App Development": {
      technologies: ["Flutter", "React Native"],
      backends: ["Node", "Java"],
    },
    "Digital Marketing": {
      services: ["Meta Ads", "SEO"],
    },
    "UI/UX Designing": {
      services: ["Logo", "Banner", "Figma"],
    },
    "CMS Platform Services": {
      platforms: ["WooCommerce", "Shopify"],
    },
    "E-commerce Website": {
      platforms: ["React", "Shopify", "WooCommerce", "Next.js"],
      addOns: { plugin: 800, products: 5 },
    },
    "Software Development": {
      technologies: ["Java", "Python"],
    },
    "CRM Solution": {
      technologies: ["Custom CRM"],
    },
  };

  const [selectedService, setSelectedService] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState({ plugins: 0, products: 0 });
  const [finalPrice, setFinalPrice] = useState(0);

  // Calculate the final price based on selections
  const calculatePrice = () => {
    let basePrice = 0;
    
    // Set base prices for each service type
    if (selectedService === "Website Development" || selectedService === "E-commerce Website") {
      basePrice = selectedTechnology === "WordPress" ? 1500 : 2000;
    } else if (selectedService === "App Development") {
      basePrice = 3000;
    }else if (selectedService === "Dynamic Projects") {
        basePrice = 5000;
      } else if (selectedService === "Digital Marketing") {
      basePrice = 1000;
    } else if (selectedService === "UI/UX Designing") {
      basePrice = 800;
    } else if (selectedService === "Software Development") {
      basePrice = 4000;
    } else if (selectedService === "CRM Solution") {
      basePrice = 6000;
    }

    // Add on charges
    let addOnPrice = selectedAddOns.plugins * services[selectedService]?.addOns?.plugin || 0;
    addOnPrice += selectedAddOns.products * (services[selectedService]?.addOns?.products || 0);

    setFinalPrice(basePrice + addOnPrice);
  };

  return (
    <>      
    <ServiceHero
    backgroundImage="../bg_pattern_service.svg"
    heading="Pricing"
  />
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
    
      <h2 className="text-3xl font-bold mb-6 text-center">Pricing Calculator</h2>

      {/* Select Service */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Select Service:</label>
        <select
          className="w-full p-3 border rounded"
          value={selectedService}
          onChange={(e) => {
            setSelectedService(e.target.value);
            setSelectedTechnology("");
            setSelectedAddOns({ plugins: 0, products: 0 });
          }}
        >
          <option value="">Select a Service</option>
          {Object.keys(services).map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Select Technology */}
      {selectedService && services[selectedService].technologies && (
        <div className="mb-4">
          <label className="block font-semibold mb-2">Select Technology:</label>
          <select
            className="w-full p-3 border rounded"
            value={selectedTechnology}
            onChange={(e) => setSelectedTechnology(e.target.value)}
          >
            <option value="">Select a Technology</option>
            {services[selectedService].technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Add-Ons for Website Development or E-commerce Website */}
      {(selectedService === "Website Development" || selectedService === "E-commerce Website") && (
        <>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Number of Plugins:</label>
            <input
              type="number"
              className="w-full p-3 border rounded"
              min="0"
              value={selectedAddOns.plugins}
              onChange={(e) =>
                setSelectedAddOns({ ...selectedAddOns, plugins: Number(e.target.value) })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Number of Products:</label>
            <input
              type="number"
              className="w-full p-3 border rounded"
              min="0"
              value={selectedAddOns.products}
              onChange={(e) =>
                setSelectedAddOns({ ...selectedAddOns, products: Number(e.target.value) })
              }
            />
          </div>
        </>
      )}

      {/* Calculate Price Button */}
      <button
        onClick={calculatePrice}
        className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Calculate Price
      </button>

      {/* Display Final Price */}
      {finalPrice > 0 && (
        <div className="mt-6 text-lg font-semibold text-center">
          Final Price: ${finalPrice}
        </div>
      )}
    </div>
    </>
  );
};

export default Pricing;
