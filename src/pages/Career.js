// Career.js

import React from "react";
import ServiceHero from "../component/ServiceHero";

const Career = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <ServiceHero
        backgroundImage="../bg_pattern_service.svg"
        heading="Career"
      />

      {/* Job Openings Section */}
      <section className="py-16 px-8 md:px-16">
       
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Job Opening Card */}
          <JobOpening
            title="Frontend Developer"
            location="Remote"
            description="We are looking for a skilled Frontend Developer to join our team. You'll work on exciting projects and collaborate with a passionate team."
            requirements={["Experience with React", "Knowledge of CSS and JavaScript", "2+ years of frontend development"]}
          />
          <JobOpening
            title="Backend Developer"
            location="Remote"
            description="Join us as a Backend Developer to build scalable and efficient backend services in Node and Python."
            requirements={["Experience with Node.js", "Familiarity with databases", "3+ years of backend development"]}
          />
          {/* Add more JobOpening components as needed */}
        </div>
      </section>
    </div>
  );
};

// Job Opening Card Component
const JobOpening = ({ title, location, description, requirements }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-500">{location}</p>
      <p className="mt-4 text-gray-700">{description}</p>
      
      <h4 className="mt-6 font-semibold text-gray-800">Requirements:</h4>
      <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <p className="text-blue-700 mt-6"><a href="mailto: hr@codecups.in" >send resume at hr@codecups.in</a></p>
    </div>
  );
};

export default Career;
