import React, { useState, useEffect } from "react";
import "./Category.css";
import C_01 from "../../assets/c01.png";
import C_02 from "../../assets/c02.png";
import C_03 from "../../assets/c03.png";
import C_04 from "../../assets/c04.png";
import C_05 from "../../assets/c05.png";
import C_06 from "../../assets/c06.png";
import C_07 from "../../assets/c07.png";
import C_08 from "../../assets/c08.png";
import C_09 from "../../assets/c09.png";
import C_10 from "../../assets/c10.png";
import C_11 from "../../assets/c11.png";
import C_12 from "../../assets/c12.png";
import C_13 from "../../assets/c13.png";
import C_14 from "../../assets/c14.png";

const Category = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollPosition === 0) {
        setTimeout(() => {
          setScrollPosition(-10);
        }, 5000);
      } else if (scrollPosition === -10) {
        setScrollPosition(-20);
      } else if (scrollPosition === -20) {
        setScrollPosition(-30);
      } else if (scrollPosition === -30) {
        setScrollPosition(-40);
      } else if (scrollPosition === -40) {
        setScrollPosition(-50);
      } else if (scrollPosition === -50) {
        setScrollPosition(-25);
      } else if (scrollPosition === -25) {
        setScrollPosition(0);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [scrollPosition]);

  return (
    <div className="category container mx-auto mt-20">
      <ul
        style={{
          transform: `translateX(${scrollPosition}%)`,
        }}
      >
        <li>
          <img src={C_01} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_02} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_03} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_04} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_05} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_06} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_07} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_08} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_09} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_10} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_11} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_12} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_13} alt="" className="c-img" />
        </li>
        <li>
          <img src={C_14} alt="" className="c-img" />
        </li>
      </ul>
    </div>
  );
};

export default Category;
