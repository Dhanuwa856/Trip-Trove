import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content container mx-auto">
        <div className="footer-logo">
          <div className="nav-logo text-3xl text-[#ff6f61] font-semibold">
            <a href="/">
              <i class="fa-solid fa-helicopter"></i> TripTrove
            </a>
          </div>
          <p>Explore the World With TripTrove</p>
        </div>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              123 Street, City, Country
            </li>
            <li>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              info@example.com
            </li>
            <li>
              <span>
                <i className="fas fa-phone"></i>
              </span>
              +1234567890
            </li>
          </ul>
          {/* Add social media links if needed */}
        </div>
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            Catering to adventurers and wanderers alike, our mission at
            TripTrove is to ignite the spirit of exploration and facilitate
            unforgettable travel experiences across the globe. With a relentless
            pursuit of excellence and a deep-seated commitment to crafting
            remarkable journeys, we endeavor to simplify travel planning and
            elevate every aspect of the traveler's journey.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-social">
          <span>
            <i class="fa-brands fa-facebook-f"></i>
          </span>
          <span>
            <i class="fa-brands fa-x-twitter"></i>
          </span>
          <span>
            <i class="fa-brands fa-linkedin-in"></i>
          </span>
          <span>
            <i class="fa-brands fa-instagram"></i>
          </span>
        </div>
        <span>
          &copy; 2024 <span className="un-line">TripTrove</span>. All rights
          reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
