import React, { useState,useEffect } from "react";
import Hamburger from "hamburger-react";
import "./Navbar.css";
export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


    const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenu(!showMenu);
  };

   return (
    <div className="header1">
      <div className="logo">
        <span className="logocircle"></span>
        <svg
          width="18"
          height="21"
          viewBox="0 0 18 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logotriangle"
        >
          <path
            d="M16.5192 9.63622C17.1807 10.0221 17.1807 10.9779 16.5192 11.3638L1.50387 20.1227C0.837211 20.5116 -8.75572e-07 20.0308 -8.41836e-07 19.259L-7.61032e-08 1.74104C-4.23671e-08 0.969246 0.837213 0.488374 1.50387 0.877257L9 5.25L16.5192 9.63622Z"
            fill="#3461FF"
          />
        </svg>
        <p className="logotext">Embrace</p>
      </div>
      <div className="menu">
      <div className={`hamburger-menu ${showMenu ? "openicon" : " closeicon"}`} onClick={toggleMobileMenu}>
          <Hamburger toggled={isMenuOpen} />
          </div>
        <div className="nav">
        <ul className={`nav-links ${showMenu ? "open1" : " close"}`}>
        <li
        className="navitem"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          How it Works
          {hoveredItem === 0 && (
            <div style={{ paddingTop: 20 }} className="top-dropdown">
              <div
                className={`dropdown-menu ${
                  hoveredItem === 0
                    ? "onMouseEnterClassName"
                    : "onMouseLeaveClassName"
                }`}
              >
                <span className="dropdown-item">Kbdnvj</span>
                <span className="dropdown-item">Fchjn</span>
                <span className="dropdown-item">Lbngh</span>
                <span className="dropdown-item">Gnokm</span>
              </div>
            </div>
          )}
        </li>
        <li
        className="navitem"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          Our Work
          {hoveredItem === 1 && (
            <div style={{ paddingTop: 20 }} className="top-dropdown">
              <div
                className={`dropdown-menu ${
                  hoveredItem === 1
                    ? "onMouseEnterClassName"
                    : "onMouseLeaveClassName"
                }`}
              >
                <span className="dropdown-item">Gnokm</span>
                <span className="dropdown-item">Kbdnvj</span>
                <span className="dropdown-item">Lbngh</span>
                <span className="dropdown-item">Fchjn</span>
              </div>
            </div>
          )}
        </li>
        <li
        className="navitem"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          Pricing
          {hoveredItem === 2 && (
            <div style={{ paddingTop: 20 }} className="top-dropdown">
              <div
                className={`dropdown-menu ${
                  hoveredItem === 2
                    ? "onMouseEnterClassName"
                    : "onMouseLeaveClassName"
                }`}
              >
                <span className="dropdown-item">Lbngh</span>
                <span className="dropdown-item">Fchjn</span>
                <span className="dropdown-item">Gnokm</span>
                <span className="dropdown-item">Kbdnvj</span>
              </div>
            </div>
          )}
        </li>
        <li
        className="navitem"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          About Us
          {hoveredItem === 3 && (
            <div style={{ paddingTop: 20 }} className="top-dropdown">
              <div
                className={`dropdown-menu ${
                  hoveredItem === 3
                    ? "onMouseEnterClassName"
                    : "onMouseLeaveClassName"
                }`}
              >
                <span className="dropdown-item">Kbdnvj</span>
                <span className="dropdown-item">Gnokm</span>
                <span className="dropdown-item">Fchjn</span>
                <span className="dropdown-item">Lbngh</span>
              </div>
            </div>
          )}
        </li>
      </ul>
      <button className={`book ${showMenu ? "show" : "hide"}`}>Book a call</button>
      </div>
    </div>
    </div>
  );
}
