import React from "react";
import "./AccountInfo.css";
import ProfileImg from "../profile.png";

const AccountInfo = ({ name, signout, entries }) => {
  return (
    <div id="account-info-container">
      <div id="account">
        <img src={ProfileImg} alt="" />
        <h1 id="profile-name">{name}</h1>
      </div>
      <h1>
        entries: <span>{entries}</span>
      </h1>
      <button id="signout" onClick={signout}>
        Sign out
      </button>
    </div>
  );
};

export default AccountInfo;
