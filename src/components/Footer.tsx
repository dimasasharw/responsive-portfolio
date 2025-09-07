import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Brand / Logo */}
        <div className="text-lg font-semibold text-white">
          © {new Date().getFullYear()} Dimas Portfolio
        </div>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/dimasasharw" target="_blank" rel="noopener noreferrer">
            <img src="/assets/svg/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          {/* <a href="https://linkedin.com/in/dimas-ashar/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
