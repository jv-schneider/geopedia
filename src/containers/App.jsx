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
      infoData: [
        {
          population: "0",
          capital: "0",
          region: "0",
          altSpellings: ["0", "0", "0"],
        },
      ],
      pictureData: "",
    };
  }

  componentDidMount() {
    fetch(this.state.countryURL)
      .then((r) => r.json())
      .then((r) => this.setState({ infoData: r }));
  }

  stateChange = (event) => {
    this.setState({
      countryURL:
        "https://restcountries.com/v3.1/name/" +
        event.target.value.toLowerCase(),
    });
    fetch(this.state.countryURL)
      .then((r) => r.json())
      .then((r) => this.setState({ infoData: r }));
  };

  render() {
    if (!this.state.infoData) {
      this.state.infoData = [
        {
          population: "0",
          capital: "0",
          region: "0",
          altSpellings: ["0", "0", "0"],
        },
      ];
    }
    return (
      <div id="app">
        <Navbar handleChange={this.stateChange} />
        <Info data={this.state.infoData} />
        <Pictures />
      </div>
    );
  }
}

export default App;
