import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMobileMenuOpen() {
    setMenuActive(!menuActive);
  }
  return (
    <nav className="nav-bar px-[10%] py-5 bg-white shadow-md">
      <div className="nav-logo text-3xl text-[#ff6f61] font-semibold">
        <a href="/">
          <i class="fa-solid fa-helicopter"></i> TripTrove
        </a>
      </div>
      <div className="nav-menu">
        <ul className={menuActive ? "nav-menu0" : ""}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-icons">
        <ul className="gap-7">
          <li>
            <a href="">
              <i class="fa-solid fa-bars-staggered"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-open-close">
        <div
          className={`open-icon ${menuActive ? "nav-icon-non-visible" : ""}`}
          onClick={toggleMobileMenuOpen}
        >
          <i class="fa-solid fa-bars-staggered"></i>
        </div>
        <div
          className={`colse-icon ${
            menuActive ? "nav-icon-visible" : "nav-icon-non-visible"
          }`}
          onClick={toggleMobileMenuOpen}
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
