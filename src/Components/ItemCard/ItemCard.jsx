import React from "react";
import "./ItemCard.css";

const ItemCard = ({ card_image, title, sub_details, price }) => {
  return (
    <div className="item-card cursor-pointer">
      <img src={card_image} alt="" />
      <h3 className="title mt-6 text-base font-semibold">{title}</h3>
      <p className="sub-details text-sm w-[80%] font-medium mt-1">
        {sub_details}
      </p>
      <div className="card-rating text-sm mt-2 text-[#ff6f61] flex items-center">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star-half-stroke"></i>
      </div>
      <h5 className="price text-base mt-2 font-medium">{price}</h5>
      <p className="ship text-[11.5px]">free shipping</p>
      <hr className="mt-3" />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ItemCard;
