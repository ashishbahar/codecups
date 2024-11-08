import React, { useState } from "react";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Reset error state
    setError("");

    // EmailJS integration
    emailjs
      .send(
        "service_w0y4uqi",
        "template_m61poqa ",
        { email },
        "nVMndy3q-jQjrcEiu"
      )
      // emailjs.send('service_w0y4uqi', 'template_8lnxjiz', formData, 'nVMndy3q-jQjrcEiu')

      .then((response) => {
        console.log("Subscription successful:", response.status, response.text);
        setIsSubmitted(true);
        setEmail("");
      })
      .catch((error) => {
        console.error("Subscription failed:", error);
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="max-w-md mx-auto ms-0">
      {isSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-gray-700">
            You have successfully subscribed to our newsletter.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="items-center m-auto">
          <div className="flex flex-row ">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className=" p-2 rounded w-full max-w-md outline-none border-[2px] border-solid hover:border-blue-900 "
            />
            <button
              type="submit"
              className=" ml-1 bg-blue-900 text-white rounded-md hover:bg-white border-[2px] border-blue-900 duration-300 border-solid  hover:text-blue-900 font-bold py-2 px-4 hover:border-blue-900 focus:shadow-outline"
            >
              Subscribe
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Newsletter;
