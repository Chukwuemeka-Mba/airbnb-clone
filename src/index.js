import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import PhotoGrid from "./PhotoGrid";
import "./styles/main.css";
const App = (
  <div>
    <Navbar></Navbar>
    <PhotoGrid></PhotoGrid>
  </div>
);

ReactDOM.render(App, document.querySelector("#root"));
