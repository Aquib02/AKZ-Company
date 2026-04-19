import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Smart IT Solutions
          </h1>

          <p className="text-lg text-gray-200 mb-6">
            We help businesses grow with modern web, cloud and software solutions.
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="hero"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;