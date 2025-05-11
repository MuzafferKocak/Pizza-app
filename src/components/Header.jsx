import React from "react";

const Header = () => {
  return (
    <header className="w-full py-6 bg-white/80 backdrop-blur-md shadow-md fixed top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-red-700 italic tracking-wider">🍕 Pizza Time</h1>
        <nav className="space-x-8 text-lg font-medium text-gray-800">
          <a href="#" className="hover:text-red-600 hover:underline transition-colors">Home</a>
          <a href="#menu" className="hover:text-red-600 hover:underline transition-colors">Menu</a>
          <a href="#contact" className="hover:text-red-600 hover:underline transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;