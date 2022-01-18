import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import PhotoGrid from "./PhotoGrid";
import Content from "./Content";
import Card from "./Card";
import Contacts from "./Contacts";
import "./styles/main.css";
const App = (
  <div>
    <Navbar></Navbar>
    <PhotoGrid></PhotoGrid>
    <Content></Content>
    <Card></Card>
    <Contacts
      img="./images/mr-whiskerson.png"
      name="Mr. Whiskerson"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
    ></Contacts>
    <Contacts
      img="./images/mr-whiskerson.png"
      name="Mr. Whiskerson"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
    ></Contacts>
    <Contacts
      img="./images/mr-whiskerson.png"
      name="Mr. Whiskerson"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
    ></Contacts>
    <Contacts
      img="./images/mr-whiskerson.png"
      name="Mr. Whiskerson"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
    ></Contacts>
  </div>
);

ReactDOM.render(App, document.querySelector("#root"));
