import React from 'react';

const Technologies = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 ">
        We Use <span className='text-blue-600'>Technologies</span>
      </h2>
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === index
                ? "bg-gradient-to-r from-[#7426ef] to-[#00c3cc] text-white"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        {/* <p className="text-gray-700 mb-4">{tabs[activeTab].content}</p> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 p-2">
          {tabs[activeTab].logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Technology logo"
              className="w-full h-[80px] rounded-full bg-white p-4 shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
