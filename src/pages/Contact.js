import React from "react";
// import phone from "../phone.png";
// import mail from "../mail.png";
// import location from "../location.png";


import Form from "../component/Form";
const Contact = () => {
  return (
    <div className="overflow-x-hidden">
     

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/6 p-4 m-auto">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <div className="flex items-center mb-4">
              <img src="../mail.png" alt="Email Logo" className="w-12 h-12 mr-2" />
              <div>
                <h6 className="font-bold">Email</h6>
                <span className="text-gray-700">info@codecups.in</span>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <img src="../phone.png" alt="Email Logo" className="w-12 h-12 mr-2" />
              <div>
                <h6 className="font-bold">Phone</h6>
                <span className="text-gray-700">8077012855 , 9536476286</span>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="../location.png"
                alt="Contact Logo"
                className="w-12 h-12 mr-2"
              />
              <div>
                <h6 className="font-bold">Address</h6>
                <span className="text-gray-700">
                10th floor Welldone Tech Park Badshahpur, Gurugram Haryana 122001

                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-4">
            <Form />
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default Contact;
