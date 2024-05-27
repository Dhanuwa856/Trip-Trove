import React from "react";
import "./About.css";
import About_img from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="about mt-10 container mx-auto">
      <div className="about-left">
        <img src={About_img} alt="" />
      </div>
      <div className="about-right">
        <p>
          Founded by a group of avid travelers, TripTrove is your trusted
          partner in exploring the world's wonders. With a deep passion for
          adventure and discovery, our team curates exceptional travel
          experiences tailored to your preferences. From hidden gems off the
          beaten path to iconic landmarks, we're here to guide you on your
          journey of exploration and self-discovery. At TripTrove, we believe
          that travel has the power to transform lives and create lasting
          memories. Let us be your compass as you embark on your next great
          adventure.
        </p>
        <p>
          At the heart of TripTrove is a commitment to exceptional service and
          customer satisfaction. Our team of experienced travel experts is
          dedicated to providing personalized assistance every step of the way.
          Whether you're planning a solo getaway, a family vacation, or a group
          adventure, we're here to ensure that your travel experience exceeds
          your expectations. With attention to detail and a passion for
          excellence, TripTrove strives to make every trip seamless, memorable,
          and truly extraordinary .
        </p>
        <p>
          At TripTrove, we understand that each traveler is unique, and we pride
          ourselves on offering a diverse range of destinations and experiences
          to suit every taste and interest. Whether you're seeking relaxation on
          pristine beaches, excitement in bustling cities, or tranquility in
          nature's embrace, we have the perfect itinerary for you. Our carefully
          crafted packages combine top-notch accommodations, immersive
          activities, and insider knowledge to deliver unforgettable moments and
          authentic cultural experiences. Let us be your trusted companion as
          you embark on the adventure of a lifetime with TripTrove.
        </p>
        <div>
          <p>
            <i class="fa-solid fa-check text-[#ff6f61]"></i> best products of
            superior quality
          </p>
          <p>
            <i class="fa-solid fa-check text-[#ff6f61]"></i> TripTrove prides
            itself on fast delivery
          </p>
          <p>
            <i class="fa-solid fa-check text-[#ff6f61]"></i> we offer 24/7
            customer service
          </p>
        </div>
        <button className="mr-auto block bg-[#ff6f61] px-10 py-3 rounded-3xl text-white font-medium capitalize">
          explore more
        </button>
      </div>
    </div>
  );
};

export default About;
