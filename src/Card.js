import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.country === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = props.openSpots + " Spots";
  }
  return (
    <div className="">
      <div className="card">
        {(props.openSpots === 0 && (
          <div className="open-spots">{badgeText}</div>
        )) || <div className="open-spots">{badgeText}</div>}
        <img src={require(`./images/${props.coverImg}`)} alt="" />
        <div className="card-header">
          <img
            src={require(`./images/${props.starIcon}`)}
            className="star"
            alt=""
          />
          <span>{props.stats.rating}</span>
          <span>({props.stats.reviewCount})</span>
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
