import React, { useState } from "react";
import "./Fast.css";
import ItemCard from "../ItemCard/ItemCard";
import Card17 from "../../assets/img17.webp";
import Card18 from "../../assets/img18.webp";
import Card19 from "../../assets/img19.webp";
import Card20 from "../../assets/img20.webp";
import Card21 from "../../assets/img21.webp";
import Card22 from "../../assets/img22.webp";
import Card23 from "../../assets/img23.webp";
import Card24 from "../../assets/img24.jpg";

const Fast = () => {
  const [items02, setItems02] = useState([
    {
      category: "Shose",
      title: "Decathlon Forclaz",
      sub_details: "Quechua Women's SH100 X-Warm Waterproof Mid Hiking Boots",
      card_image: Card17,
      price: "$50.00",
    },
    {
      category: "Shirts",
      title: "Decathlon Forclaz",
      sub_details:
        "Forclaz Men's Merino Wool Long-Sleeved Backpacking T-Shirt - MT900",
      card_image: Card18,
      price: "$70.00",
    },
    {
      category: "pants",
      title: "Decathlon Quechua",
      sub_details: "Quechua Men's NH500 Imper Waterproof Over Pants",
      card_image: Card19,
      price: "$29.99",
    },
    {
      category: "shorts",
      title: "Decathlon Forclaz",
      sub_details: "Forclaz Adult MT500 Merino Wool Hat",
      card_image: Card20,
      price: "$19.99",
    },
    {
      category: "gloves",
      title: "Decathlon Forclaz",
      sub_details: "Forclaz Adult MT900 Backpacking Gloves",
      card_image: Card21,
      price: "$39.99",
    },
    {
      category: "shorts",
      title: "Decathlon Quechua",
      sub_details: "Quechua Women's MH100 Hiking Shorts",
      card_image: Card22,
      price: "$24.99",
    },
    {
      category: "bags",
      title: "Decathlon Forclaz",
      sub_details: "Forclaz Travel 100 Compact Waterproof 20 L Hiking Backpack",
      card_image: Card23,
      price: "$24.99",
    },
    {
      category: "socks",
      title: "Decathlon Quechua",
      sub_details: "Quechua Hike 500 Mid Hiking Socks - 2 Pairs",
      card_image: Card24,
      price: "$19.99",
    },
  ]);
  const [filteredItems, setFilteredItems] = useState(items02);

  return (
    <div className="fast">
      <div className="item-list mx-auto mt-16 w-[85%]">
        {filteredItems.map((item, index) => (
          <ItemCard
            key={index}
            category={item.category}
            title={item.title}
            card_image={item.card_image}
            sub_details={item.sub_details}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Fast;
