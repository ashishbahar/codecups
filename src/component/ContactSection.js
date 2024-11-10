// ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-gray-400">We'd love to hear from you! Please fill out the form below to reach out to us.</p>
      </div>
      
      <form className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-md shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-700 rounded-md bg-gray-700 text-white"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
