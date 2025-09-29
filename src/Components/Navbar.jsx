import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center h-16 px-6 bg-blue-600 shadow-md">
      <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
        COW Mood Detector
      </h1>
      <div className="flex space-x-4 mt-2 sm:mt-0">
        {[
          { name: "GitHub", url: "https://github.com/Zilan-Hasnath-Lithon" },
          { name: "Twitter", url: "https://x.com/ZilanHasnath" },
        ].map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
