import React from "react";
import "./images/photo-grid.png";
function PhotoGrid() {
  return (
    <div className="photo-grid">
      <img src={require("./images/photo-grid.png")} />
    </div>
  );
}

export default PhotoGrid;
