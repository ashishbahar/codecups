import React from 'react'

const ClientCard = ({ logo, title }) =>{
    return (
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src={logo} // replace with actual logo path
              alt={`${logo} logo`} 
              className="w-full h-full"
            />
          </div>
          <p className="text-gray-600">{title}</p>
        </div>
      );
    };
  

export default ClientCard
   