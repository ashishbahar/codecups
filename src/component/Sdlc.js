import React from 'react'

const Sdlc = () => {
  return (
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
  )
}

export default Sdlc
