import React, { useState } from "react";
import ServiceHero from "../component/ServiceHero";

// FAQ Data - You can add more questions and answers here
const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer web development, app development, digital marketing, UI/UX design, and more.",
  },
  {
    question: "What technologies do you use?",
    answer: "Our team uses React, Next.js, WordPress, Webflow, Flutter, and various backend technologies like Node.js and Python.",
  },
  {
    question: "How do I request a quote?",
    answer: "You can request a quote through our website’s Contact Us page, or by calling us directly.",
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes, we provide maintenance and support packages to ensure your project runs smoothly after launch.",
  },
  {
    question: "How long does a project take?",
    answer: "The timeline depends on the scope and complexity of the project. A typical website project takes 4-8 weeks.",
  },
];

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

// FAQ Page Component
const FAQ = () => {
  return (
    <>
       <ServiceHero
        backgroundImage="../bg_pattern_service.svg"
        heading="FAQs"
      />
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQ;
