import React from "react";
import "./Testimonials.css";
import { Carousel } from "flowbite-react";
import User01 from "../../assets/user01.jpg";
import User02 from "../../assets/user02.jpg";
import User03 from "../../assets/user03.jpg";
import User04 from "../../assets/user04.jpg";
import User05 from "../../assets/user05.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials mt-10 px-[10%]">
      <div className="testimonial-wrapper">
        <Carousel slideInterval={5000}>
          <div className="carousel-item">
            <div className="user-info">
              <img src={User01} alt="" />
              <div>
                <h4>Jon Martinez</h4>
                <p>customer</p>
              </div>
            </div>
            <div className="comment">
              <p>
                "I recently purchased a travel organizer from TripTrove and
                couldn't be happier with my purchase! The quality is
                outstanding, and it has made packing for my trips so much
                easier. Highly recommend!"
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="user-info">
              <img src={User02} alt="" />
              <div>
                <h4>Mason Nguyen</h4>
                <p>customer</p>
              </div>
            </div>
            <div className="comment">
              <p>
                "TripTrove's travel accessories are a game-changer for frequent
                travelers like myself. From luggage tags to packing cubes, their
                products are both functional and stylish. I love how they help
                me stay organized on the go!"
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="user-info">
              <img src={User03} alt="" />
              <div>
                <h4>Harper Patel</h4>
                <p>customer</p>
              </div>
            </div>
            <div className="comment">
              <p>
                "I was pleasantly surprised by the wide selection of travel
                accessories available on TripTrove's website. The prices are
                reasonable, and the products are of excellent quality. Will
                definitely be shopping here again for my next trip!"
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="user-info">
              <img src={User04} alt="" />
              <div>
                <h4>Liam Rodriguez</h4>
                <p>customer</p>
              </div>
            </div>
            <div className="comment">
              <p>
                "I recently bought a travel neck pillow from TripTrove, and it's
                been a lifesaver on long flights. The memory foam is so
                comfortable, and the compact design makes it easy to carry.
                Couldn't be happier with my purchase!"
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="user-info">
              <img src={User05} alt="" />
              <div>
                <h4>Ava Thompson</h4>
                <p>customer</p>
              </div>
            </div>
            <div className="comment">
              <p>
                "TripTrove's customer service is top-notch! I had a question
                about one of their products, and their team was quick to respond
                and provide helpful advice. It's clear that they genuinely care
                about their customers' satisfaction. Highly recommend shopping
                here for all your travel accessory needs!"
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
