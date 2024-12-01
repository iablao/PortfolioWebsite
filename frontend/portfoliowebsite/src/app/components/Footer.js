import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <div className="mt-2">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
