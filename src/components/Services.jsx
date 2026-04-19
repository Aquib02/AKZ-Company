import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
            <p className="text-gray-600">Modern websites using latest tech.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">App Development</h3>
            <p className="text-gray-600">Cross-platform mobile apps.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">Cloud Solutions</h3>
            <p className="text-gray-600">Secure cloud infrastructure.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Clean and modern design.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;