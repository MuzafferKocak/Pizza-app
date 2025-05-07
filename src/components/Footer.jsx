import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-12 py-6 text-center text-sm text-gray-500 border-t border-gray-300">
      <p>© {year} Pizza App. Alle Rechte vorbehalten.</p>
    </footer>
  );
};

export default Footer;