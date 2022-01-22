import React from "react";
import "./images/photo-grid.png";
function PhotoGrid() {
  return (
    <div className="photo-grid">
      <img src={require("./images/photo-grid.png")} alt="" />
    </div>
  );
}

export default PhotoGrid;
