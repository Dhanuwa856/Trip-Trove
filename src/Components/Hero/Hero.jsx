import { React } from "react";
import "./Hero.css";
import { Carousel } from "flowbite-react";
import Img01 from "../../assets/hero-01.png";
import Img02 from "../../assets/hero-02.png";
import Img03 from "../../assets/hero-03.png";
import Img04 from "../../assets/hero-04.png";

const Hero = () => {
  return (
    <div className="hero z-[0] container mx-auto rounded-lg">
      <div className="hero-bg-filter -z-[1] rounded-lg"></div>
      <div className="hero-content pt-24 z-[1] px-[10%]">
        <div className="hero-left">
          <h2 className="text-white text-4xl font-medium w-[70%]">
            new experience for traveling new places.
          </h2>
          <h4 className="mt-2 text-white text-lg">
            $500.00 <span className="text-sm">Full Package</span>
          </h4>
          <button className="flex items-center gap-3 text-white mt-2">
            <div className="underline">shop now</div>
            <span>
              <i class="fa-solid fa-arrow-right fa-beat"></i>
            </span>
          </button>
        </div>
        <div className="hero-right h-[50vh]">
          <Carousel indicators={false} leftControl={false} rightControl={false}>
            <img src={Img01} alt="..." className="hero-img" />
            <img src={Img02} alt="..." className="hero-img" />
            <img src={Img03} alt="..." className="hero-img" />
            <img src={Img04} alt="..." className="hero-img" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
