import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Info from "./Info";
import Pictures from "./Pictures";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countryURL: "https://restcountries.com/v3.1/name/germany",
      infoData: "",
      pictureData: "",
    };
    fetch(this.state.countryURL)
      .then((r) => r.json())
      .then((r) => this.setState({ infoData: r }));
  }

  render() {
    return (
      <div id="app">
        <Navbar />
        <Info population={"pop"} capital={"cap"} region={"reg"} />
        <Pictures />
      </div>
    );
  }
}

export default App;
