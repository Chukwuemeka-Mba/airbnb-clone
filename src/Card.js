import React from "react";
function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={require("./images/swimmer.png")} />
        <div className="card-header">
          <img src={require("./images/star.png")} className="star" />
          <span>5.0</span>
          <span>(6)</span>
          <p>Aquawoman</p>
        </div>
        <span>
          <p>Swimming experiences that bang</p>
        </span>
        <p>
          <strong>From $126</strong> / Person
        </p>
      </div>
    </div>
  );
}

export default Card;
