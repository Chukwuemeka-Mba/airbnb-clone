import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import PhotoGrid from "./PhotoGrid";
import Content from "./Content";
import Card from "./Card";
import "./styles/main.css";
const App = (
  <div>
    <Navbar></Navbar>
    <PhotoGrid></PhotoGrid>
    <Content></Content>
    <Card></Card>
  </div>
);

ReactDOM.render(App, document.querySelector("#root"));
