import React from "react";
import "./SignIn.css";
import Logo from "../Logo.png";

const SignIn = ({ login, register }) => {
  return (
    <div id="login-container">
      <div id="form">
        <div id="headline-container">
          <img src={Logo} alt="" id="logo-signin" />
          <h1 id="headline">Sign in</h1>
        </div>
        <div className="input-container">
          <h2 className="form-label">Username</h2>
          <input type="text" className="form" id="login-username" />
        </div>
        <div className="input-container">
          <h2 className="form-label">Password</h2>
          <input type="password" className="form" id="login-password" />
        </div>
        <div id="button-container">
          <button
            id="login-button"
            type="submit"
            className="btn"
            onClick={login}
          >
            login
          </button>
          <button
            id="register-button"
            type="submit"
            className="btn"
            onClick={register}
          >
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
