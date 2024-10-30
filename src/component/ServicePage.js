import React from "react";

// 1. Banner Component
const Banner = () => (
  <div className="bg-cover bg-blue-900 bg-center h-96 flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundImage: "url('../bg_pattern_service.svg')" }}>
    Our Services
  </div>
);

// 2. Content & Heading Component
const ContentSection = ({ heading, content }) => (
  <div className="max-w-4xl mx-auto my-12 px-6 text-center">
    <h2 className="text-3xl font-semibold mb-4">{heading}</h2>
    <p className="text-lg text-gray-700">{content}</p>
  </div>
);

// 3. SDLC Approach Component
const SDLCApproach = () => (
  <div className="bg-gray-100 py-12">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
      <p className="text-lg text-gray-600 mb-8">Our software development lifecycle (SDLC) approach ensures efficient, scalable, and high-quality solutions.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-white shadow-lg rounded-lg">Planning</div>
        <div className="p-4 bg-white shadow-lg rounded-lg">Design</div>
        <div className="p-4 bg-white shadow-lg rounded-lg">Development</div>
        <div className="p-4 bg-white shadow-lg rounded-lg">Testing</div>
      </div>
    </div>
  </div>
);

// 4. Technologies Component with Tabs
const Technologies = () => {
    const tabs = [
      {
        name: "Web Platform",
        content: "We use modern front-end technologies like React, Vue, and Angular.",
        logos: ["/path-to-logo/react.png", "/path-to-logo/vue.png", "/path-to-logo/angular.png"],
      },
      {
        name: "Backend Technology",
        content: "Our backend stack includes Node.js, Django, and more.",
        logos: ["/path-to-logo/nodejs.png", "/path-to-logo/django.png", "/path-to-logo/ruby.png"],
      },
      {
        name: "Database",
        content: "We specialize in MySQL, MongoDB, PostgreSQL, and more.",
        logos: ["/path-to-logo/mysql.png", "/path-to-logo/mongodb.png", "/path-to-logo/postgresql.png"],
      },
      {
        name: "Clouds",
        content: "AWS, Azure, and Google Cloud are some of our cloud platforms.",
        logos: ["/path-to-logo/aws.png", "/path-to-logo/azure.png", "/path-to-logo/google-cloud.png"],
      },
      {
        name: "Mobile App",
        content: "We develop mobile applications using React Native and Flutter.",
        logos: ["/path-to-logo/react-native.png", "/path-to-logo/flutter.png"],
      },
      {
        name: "Framework",
        content: "We adopt frameworks that suit project requirements for efficiency.",
        logos: ["/path-to-logo/express.png", "/path-to-logo/spring.png", "/path-to-logo/laravel.png"],
      },
    ];
  
    const [activeTab, setActiveTab] = React.useState(0);
  
    return (
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">We Use Technologies</h2>
        <div className="flex justify-center space-x-4 mb-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">{tabs[activeTab].content}</p>
          <div className="flex justify-center space-x-4 mt-4">
            {tabs[activeTab].logos.map((logo, index) => (
              <img key={index} src={logo} alt="Technology logo" className="w-10 h-10" />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
// 5. Contact Us Component
const ContactUs = () => (
  <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('../bg_pattern_service.svg')" }}>
    <p className="text-lg font-light mb-4">Have a project in mind? Let’s make it a reality.</p>
    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Contact Us</button>
  </div>
);

// Main Services Page
const ServicePage = () => (
  <div>
    <Banner />
    <ContentSection heading="What We Offer" content="We offer a range of services to help you bring your project to life, including web development, mobile app development, and cloud solutions." />
    <SDLCApproach />
    <Technologies />
    <ContactUs />
  </div>
);

export default ServicePage;
