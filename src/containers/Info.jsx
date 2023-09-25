import React from "react";
import "./Info.css";

const Info = ({ data }) => {
  return (
    <div id="info-container">
      <h1 id="country">{data[0].altSpellings[1]}</h1>
      <div id="information">
        <h2 id="population">
          Population: <span>{data[0].population}</span>
        </h2>
        <h2 id="capital">
          Capital City: <span>{data[0].capital}</span>
        </h2>
        <h2 id="region">
          Region: <span>{data[0].region}</span>
        </h2>
        <h2 id="sub-region">
          Subregion: <span>{data[0].subregion}</span>
        </h2>
        <h2 id="timezones">
          Timezones: <span>{data[0].timezones + " "}</span>
        </h2>
        <h2 id="borders">
          Borders: <span>{data[0].borders + " "}</span>
        </h2>
      </div>
    </div>
  );
};

export default Info;
