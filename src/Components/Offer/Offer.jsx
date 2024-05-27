import React from "react";
import "./Offer.css";
import { Carousel } from "flowbite-react";
import Img01 from "../../assets/c01.png";
import Img02 from "../../assets/c06.png";
import Img03 from "../../assets/c07.png";
import Img04 from "../../assets/c14.png";
import MiniTitle from "../MiniTitle/MiniTitle";

const Offer = () => {
  return (
    <div className="offer-wrapper">
      <MiniTitle minititle="Exclusive Offer: Limited Time Only!" />

      <div className="offer container mx-auto mt-10">
        <div className="offer-filter"></div>
        <div className="hero-content pt-24 z-[1] px-[10%] offer-content">
          <div className="hero-right w-1/2 h-[50vh]">
            <Carousel
              indicators={false}
              leftControl={false}
              rightControl={false}
            >
              <img src={Img01} alt="..." className="hero-img" />
              <img src={Img02} alt="..." className="hero-img" />
              <img src={Img03} alt="..." className="hero-img" />
              <img src={Img04} alt="..." className="hero-img" />
            </Carousel>
          </div>
          <div className="hero-left w-1/2">
            <h2 className="text-white text-4xl font-medium w-[70%] mt-10">
              Claim your voucher
            </h2>
            <h4 className="mt-2 text-white text-lg">
              20%<span className="text-sm"> OFF</span>
            </h4>
            <button className="flex items-center gap-3 text-white mt-2">
              <div className="underline">claim now</div>
              <span>
                <i class="fa-solid fa-arrow-right fa-beat"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
