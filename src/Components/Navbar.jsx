import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-16 px-6 bg-blue-600 shadow-md">
            <h1 className="text-2xl font-bold text-white">COW Mood Detector</h1>
            <div className="space-x-4">
                <a
                    href="https://github.com/Zilan-Hasnath-Lithon"
                    className="text-white font-medium hover:text-gray-200 transition-colors duration-200"
                >
                    GitHub
                </a>
                <a
                    href="https://x.com/ZilanHasnath"
                    className="text-white font-medium hover:text-gray-200 transition-colors duration-200"
                >
                    Twitter
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
