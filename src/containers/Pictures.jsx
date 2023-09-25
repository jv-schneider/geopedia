import React from "react";
import "./Pictures.css";
import world from "../picture.svg";

const Pictures = () => {
  return (
    <div id="pictures-container">
      <img src={world} alt="" id="world" />
    </div>
  );
};

export default Pictures;
