import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1b] text-white py-6 mt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/janmikael"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6d3ce4] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6d3ce4] transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Michael. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
