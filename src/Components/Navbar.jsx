import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide drop-shadow">
          COW Mood Detector
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
