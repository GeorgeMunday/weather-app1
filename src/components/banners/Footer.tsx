import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a href="/" className="hover:text-gray-600">
            Home
          </a>
          <a href="/settings" className="hover:text-gray-600">
            Settings
          </a>
          <a href="/about" className="hover:text-gray-600">
            About
          </a>
          <a href="/signin" className="hover:text-gray-600">
            Sign In
          </a>
          <a href="/signup" className="hover:text-gray-600">
            Sign Up
          </a>
        </div>
        <div className="text-sm md:text-base">
          <span>Find more on my GitHub: </span>
          <a
            href="https://github.com/GeorgeMunday"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GeorgeMunday
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className=" text-gray-500 text-center text-sm py-3 border-t border-gray-400">
        &copy; {new Date().getFullYear()} YourWebsiteName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
