import React from 'react'

const ContactHero = () => {
  return (
    <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('../bg_pattern_service.svg')" }}>
    <p className="text-lg font-light mb-4">Have a project in mind? Let’s make it a reality.</p>
    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Contact Us</button>
  </div>
  )
}

export default ContactHero
