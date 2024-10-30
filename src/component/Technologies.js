import React from 'react'

const Technologies = () => {
    const [activeTab, setActiveTab] = React.useState(0);

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
  )
}

export default Technologies



