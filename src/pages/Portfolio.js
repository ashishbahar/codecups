// Portfolio.js

import React from "react";
import ServiceHero from "../component/ServiceHero";

const Portfolio = () => {
  // Sample data for projects; in a real application, you may fetch this from an API or database
  const projects = [
    {
      title: "Ecommerce Website",
      description: "A data visualization platform for monitoring IoT devices in real-time, with analytics and alerting features.",
      technologies: ["Php", "Woocommerce Wordpress", "Elementor"],
      imageUrl: "../projects/10.png",
    },
    {
      title: "Business ",
      description: "A data visualization platform for monitoring IoT devices in real-time, with analytics and alerting features.",
      technologies: ["React", "Node", "Jquery"],
      imageUrl: "../projects/11.png",
    },
    {
      title: "Healthcare",
      description: "A data visualization platform for monitoring IoT devices in real-time, with analytics and alerting features.",
      technologies: ["Angular", "D3.js", "Python"],
      imageUrl: "../projects/12.png",
    },
    {
      title: "Healthcare",
      description: "A data visualization platform for monitoring IoT devices in real-time, with analytics and alerting features.",
      technologies: ["WPBakery", "Wordpress", "Jquery","Php"],
      imageUrl: "../projects/13.png",
    },
    {
      title: "Portfolio",
      description: "A scalable e-commerce platform for a global retail brand, featuring advanced search",
      technologies: ["Html", "Javascript", "Bootstrap", "Tailwind CSS"],
      imageUrl: "../projects/1.png",
    },
    {
      title: "Business ",
      description: "A web-based tool to manage and track project progress for teams and organizations.",
      technologies: ["Php", "Html","Jquery","Javascript"],
      imageUrl: "../projects/2.png",
    },
    {
      title: "CyberSecurity",
      description: "A secure and fast banking application for a financial institution, including payment, transfer, and account management features.",
      technologies: ["React", "Redux", "AWS"],
      imageUrl: "../projects/3.png",
    },
    {
      title: "Ecommerce",
      description: "A data visualization platform for monitoring IoT devices in real-time, with analytics and alerting features.",
      technologies: ["Laravel"],
      imageUrl: "../projects/4.png",
    },
    {
      title: "Fintech ",
      description: "A data visualization platform for monitoring IoT devices in real-time, with analytics and alerting features.",
      technologies: ["Next js", "Python", "Machine Learning","Node"],
      imageUrl: "../projects/5.png",
    },
    {
      title: "Business ",
      description: "A data visualization platform for monitoring IoT devices in real-time, with analytics and alerting features.",
      technologies: ["Payment Gateway", "Node", "React"],
      imageUrl: "../projects/6.png",
    },
    {
      title: "Business ",
      description: "A data visualization platform for monitoring IoT devices in real-time, with analytics and alerting features.",
      technologies: ["Angular", "D3.js", "Python"],
      imageUrl: "../projects/7.png",
    },
    {
      title: "Digital Marketing",
      description: "A data visualization platform for monitoring IoT devices in real-time, with analytics and alerting features.",
      technologies: ["Angular", "D3.js", "Python"],
      imageUrl: "../projects/8.png",
    },
 
  ];

  return (
    <>
       <ServiceHero
        backgroundImage="../bg_pattern_service.svg"
        heading="Portfolio"
      />
    <div className="bg-gray-50 min-h-screen py-12 px-8 md:px-16">
      <header className="text-center mb-12">
         <p className="mt-4 text-lg text-gray-600">
          Take a look at some of the projects we’ve worked on with our clients.
        </p>
      </header>

      {/* Project Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </div>
    </>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-100 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      <h4 className="mt-4 font-semibold text-gray-800">Technologies Used:</h4>
      <ul className="mt-2 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <li
            key={index}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
