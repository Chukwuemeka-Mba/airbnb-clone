import React from "react";
import "./images/airbnb.png";
function Navbar() {
  return (
    <div>
      <nav className="nav-container">
        <div className="nav-icon-container">
          <img className="nav-icon" src={require("./images/airbnb.png")} />
          <span>Airbnb</span>
        </div>

        <div className="link-container">
          <ul>
            <li>Home</li>
            <li>Locations</li>
            <li>Premium</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
