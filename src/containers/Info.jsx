import React from "react";
import "./Info.css";

const Info = ({ population, capital, region }) => {
  return (
    <div id="info-container">
      <h1 id="country">Germany</h1>
      <div id="information">
        <h2 id="population">{population}</h2>
        <h2 id="capital">{capital}</h2>
        <h2 id="region">{region}</h2>
      </div>
    </div>
  );
};

export default Info;
