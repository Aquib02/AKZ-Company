import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About Akz IT Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <p className="text-gray-600">Information technology company</p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Basic Info</h3>
            <p className="text-gray-600">Not yet rated (0 reviews)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

            <p className="text-gray-700 mb-2">📞 0471 254 1414</p>
            <p className="text-gray-700 mb-4">✉️ info@akzit.com</p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Website & Links
            </h3>

            <a
              href="http://www.akzit.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              http://www.akzit.com/
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;