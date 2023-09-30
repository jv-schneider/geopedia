import React from "react";
import "./Form.css";
import Logo from "../Logo.png";

class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  usernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  passwordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  login = (event) => {
    fetch(this.props.backendServer + "login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r != "error logging in") {
          this.props.updateUser(r);
          this.props.changeRoute("app");
        }
      });
  };

  register = (event) => {
    fetch(this.props.backendServer + "register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((user) => user.json())
      .then((user) => {
        if (user) {
          this.props.updateUser(user);
          this.props.changeRoute("signin");
        }
      });
  };

  render() {
    return (
      <div id="login-container">
        <div id="form">
          <div id="headline-container">
            <img src={Logo} alt="" id="logo-signin" />
            <h1 id="headline">Sign in</h1>
          </div>
          <div className="input-container">
            <h2 className="form-label">Username</h2>
            <input
              type="text"
              className="form"
              id="login-username"
              onChange={this.usernameChange}
            />
          </div>
          <div className="input-container">
            <h2 className="form-label">Password</h2>
            <input
              type="password"
              className="form"
              id="login-password"
              onChange={this.passwordChange}
            />
          </div>
          <div id="button-container">
            <button
              id="login-button"
              type="submit"
              className="btn"
              onClick={this.login}
            >
              login
            </button>
            <button
              id="register-button"
              type="submit"
              className="btn"
              onClick={this.register}
            >
              register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
