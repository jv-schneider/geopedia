import React from "react";
import "./Searchbar.css";

const Searchbar = ({ handleChange }) => {
  return (
    <div id="searchbar-container">
      <input type="text" onClick={handleChange} />
      {/* <button onClick={handleChange}>Search</button> */}
    </div>
  );
};

export default Searchbar;
