import React from "react";
import "./Info.css";

const Info = ({ data }) => {
  return (
    <div id="info-container">
      <h1 id="country">{data[0].altSpellings[1]}</h1>
      <div id="information">
        <h2 id="population">{data[0].population}</h2>
        <h2 id="capital">{data[0].capital}</h2>
        <h2 id="region">{data[0].region}</h2>
      </div>
    </div>
  );
};

export default Info;
