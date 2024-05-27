import React, { useState } from "react";
import "./ItemsWrapper.css";
import Card01 from "../../assets/img01.webp";
import Card02 from "../../assets/img02.webp";
import Card03 from "../../assets/img03.webp";
import Card04 from "../../assets/img04.webp";
import Card05 from "../../assets/img05.webp";
import Card06 from "../../assets/img06.webp";
import Card07 from "../../assets/img07.webp";
import Card08 from "../../assets/img08.webp";
import Card09 from "../../assets/img09.webp";
import Card10 from "../../assets/img10.webp";
import Card11 from "../../assets/img11.webp";
import Card12 from "../../assets/img12.webp";
import Card13 from "../../assets/img13.webp";
import Card14 from "../../assets/img14.webp";
import Card15 from "../../assets/img15.webp";
import Card16 from "../../assets/img16.webp";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ItemCard from "../ItemCard/ItemCard";

const ItemsWrapper = () => {
  const [items, setItems] = useState([
    {
      category: "bags",
      title: "Decathlon Forclaz",
      sub_details: "Forclaz Men's MT900 Symbium2 70+10 L Backpacking Pack",
      card_image: Card01,
      price: "$219.00",
    },
    {
      category: "tents",
      title: "Decathlon Quechua",
      sub_details:
        "Quechua 2 Second Easy Waterproof Pop Up Camping Tent 2 Person",
      card_image: Card02,
      price: "$169.00",
    },
    {
      category: "bags",
      title: "Decathlon Quechua",
      sub_details:
        "Quechua NH Arpenaz 500 20 L Hiking Backpack with Ice Compartment",
      card_image: Card03,
      price: "$54.99",
    },
    {
      category: "shoes",
      title: "Decathlon Quechua",
      sub_details: "Quechua Women's NH100 Hiking Boots",
      card_image: Card04,
      price: "$24.99",
    },
    {
      category: "jackets",
      title: "Decathlon Quechua",
      sub_details: "Quechua Men's Raincut 1/2 Zip Rain Jacket",
      card_image: Card05,
      price: "$19.99",
    },
    {
      category: "bags",
      title: "Decathlon Quechua",
      sub_details: "Quechua FH500 17L Lightweight Hiking Backpack",
      card_image: Card06,
      price: "$69.99",
    },
    {
      category: "tents",
      title: "Decathlon Forclaz",
      sub_details: "Forclaz Trek 500 Waterproof Backpacking Tent 3 Person",
      card_image: Card07,
      price: "$219.00",
    },
    {
      category: "shoes",
      title: "Decathlon Quechua",
      sub_details: "Quechua Women's MH500 Waterproof Hiking Shoes",
      card_image: Card08,
      price: "$89.99",
    },
    {
      category: "jackets",
      title: "Decathlon Quechua",
      sub_details: "Quechua MH500 Waterproof Hiking Jacket Men's",
      card_image: Card09,
      price: "$129.00",
    },
    {
      category: "bags",
      title: "Decathlon Forclaz",
      sub_details: "Forclaz 500 Extend 40-60 L Duffel Bag",
      card_image: Card10,
      price: "$79.99",
    },
    {
      category: "shoes",
      title: "Decathlon Quechua",
      sub_details: "Quechua Women's NH100 Low Waterproof Hiking Boots",
      card_image: Card11,
      price: "$59.99",
    },
    {
      category: "jackets",
      title: "Decathlon Quechua",
      sub_details: "Quechua Women's waterproof mountain walking jacket MH100",
      card_image: Card12,
      price: "$49.99",
    },
    {
      category: "tents",
      title: "Decathlon Quechua",
      sub_details:
        "Quechua 2 Second Fresh & Black Waterproof Pop Up Camping Tent 2 Person",
      card_image: Card13,
      price: "$149.00",
    },
    {
      category: "jackets",
      title: "Decathlon Forclaz",
      sub_details: "Forclaz Men's MT500 Down Puffer Jacket",
      card_image: Card14,
      price: "$119.00",
    },
    {
      category: "shoes",
      title: "Decathlon Quechua",
      sub_details: "Quechua Men's NH500 Hiking Shoes",
      card_image: Card15,
      price: "$69.99",
    },
    {
      category: "tents",
      title: "Decathlon Quechua",
      sub_details: "Quechua 2 Second Waterproof Pop Up Camping Tent 2 Person",
      card_image: Card16,
      price: "$119.00",
    },
  ]);

  const categories = Array.from(new Set(items.map((item) => item.category)));

  const [filteredItems, setFilteredItems] = useState(items);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };
  const handleCategorySelect = (category) => {
    if (category === "All") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter((item) => item.category === category));
    }
  };

  return (
    <div className="container mx-auto">
      <CategoryFilter
        categories={["All", ...categories]}
        onSelectCategory={handleCategorySelect}
      />
      <div className="item-list mx-auto mt-16">
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
      {isVisible && (
        <div className="item-list mx-auto mt-16 item-list02">
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
      )}
      <button
        className="mx-auto block bg-[#ff6f61] px-10 py-3 rounded-3xl text-white font-medium capitalize"
        onClick={toggleVisibility}
      >
        explore more
      </button>
    </div>
  );
};

export default ItemsWrapper;
