import React from "react";
import "./Pictures.css";

const Pictures = (flag) => {
  return (
    <div id="pictures-container">
      <img src={flag.flag} alt="" id="world" />
    </div>
  );
};

export default Pictures;
