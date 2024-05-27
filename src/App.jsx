import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Category from "./Components/Category/Category";
import ItemsWrapper from "./Components/ItemsWrapper/ItemsWrapper";
import MiniTitle from "./Components/MiniTitle/MiniTitle";
import Offer from "./Components/Offer/Offer";
import About from "./Components/About/About";
import Fast from "./Components/Fast/Fast";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <MiniTitle minititle="New Arrivals - Hike & Camp" />
      <ItemsWrapper />
      <Offer />
      <MiniTitle minititle="About Us" />
      <About />
      <MiniTitle minititle="Fast moving items" />
      <Fast />
      <MiniTitle minititle="clients say us" />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
