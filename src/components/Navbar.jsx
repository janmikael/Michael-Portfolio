import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Michael &nbsp;
            <span className="md:block hidden"> | Web Developer</span>
          </p>
        </Link>

        {/* Desktop Menu (Shows only on lg screens and above) */}
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <li>
            <a
              href="/Michael-Portfolio/Michael S. Pacto - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#371d6e] px-4 py-2 rounded-md font-medium hover:bg-[#6d3ce4] transition"
            >
              My Resume
            </a>
          </li>
        </ul>

        {/* Mobile & Tablet Menu (Shows on screens below lg: 1024px) */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          {/* Toggle Button */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[29px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Dropdown Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <li>
                <a
                  href="/Michael-Portfolio/Michael S. Pacto - Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#371d6e] px-3 py-1 rounded-md font-medium hover:bg-[#6d3ce4] transition"
                >
                  My Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
