import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold text-blue-600">
          AKZ IT Solutions
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
        </nav>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>

      </div>
    </header>
  );
};

export default Navbar;