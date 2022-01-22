import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import PhotoGrid from "./PhotoGrid";
import Content from "./Content";
import Card from "./Card";
import data from "./data";
import "./styles/main.css";

const cards = data.map((item) => {
  return <Card key={item.id} {...item} starIcon="star.png"></Card>;
});

const App = (
  <div>
    <Navbar></Navbar>
    <PhotoGrid></PhotoGrid>
    <Content></Content>
    <section className="card-container">{cards}</section>
  </div>
);

ReactDOM.render(App, document.querySelector("#root"));
