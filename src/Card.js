import React from "react";

function Card(props) {
  return (
    <div className="">
      <div className="card">
        <img src={require(`./images/${props.img}`)} alt="" />
        <div className="card-header">
          <img
            src={require(`./images/${props.starIcon}`)}
            className="star"
            alt=""
          />
          <span>{props.rating}</span>
          <span>({props.reviewCount})</span>
          <p>{props.country}</p>
        </div>
        <span>
          <p>{props.title}</p>
        </span>
        <p>
          <strong>From ${props.price}</strong> / Person
        </p>
      </div>
    </div>
  );
}

export default Card;
