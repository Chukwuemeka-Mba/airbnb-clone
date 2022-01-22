import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import PhotoGrid from "./PhotoGrid";
import Content from "./Content";
import Card from "./Card";
import data from "./data";
import "./styles/main.css";

const cards = data.map((item) => {
  return (
    <Card
      img={item.coverImg}
      starIcon="star.png"
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.country}
      title={item.description}
      price={item.price}
    ></Card>
  );
});

const App = (
  <div>
    <Navbar></Navbar>
    <PhotoGrid></PhotoGrid>
    <Content></Content>
    {cards}
  </div>
);

ReactDOM.render(App, document.querySelector("#root"));
