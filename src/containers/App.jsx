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
          subregion: "0",
          altSpellings: ["0", "0", "0"],
          timezones: "0",
          borders: "0",
          flags: {
            svg: "Websites/geopedia/src/picture.svg",
          },
        },
      ],
      pictureData: "",
    };
  }

  componentDidMount() {
    fetch(this.state.countryURL)
      .then((r) => r.json())
      .then((r) => this.setState({ infoData: r }))
      .then(() => console.log(this.state.infoData));
  }

  stateChange = (event) => {
    if (event.key == "Enter") {
      this.setState({
        countryURL:
          "https://restcountries.com/v3.1/name/" +
          event.target.value.toLowerCase(),
      });
      fetch(this.state.countryURL)
        .then((r) => r.json())
        .then((r) => {
          console.log(r);
          try {
            if (r[0].hasOwnProperty("capital")) {
              this.setState({ infoData: r });
            } else {
              this.setState({
                infoData: [
                  {
                    population: "0",
                    capital: "0",
                    region: "0",
                    subregion: "0",
                    altSpellings: ["0", "0", "0"],
                    timezones: "0",
                    borders: "0",
                    flags: {
                      svg: "Websites/geopedia/src/picture.svg",
                    },
                  },
                ],
              });
            }
          } catch (error) {
            this.setState({
              infoData: [
                {
                  population: "0",
                  capital: "0",
                  region: "0",
                  subregion: "0",
                  altSpellings: ["0", "This is not a country!", "0"],
                  timezones: "0",
                  borders: "0",
                  flags: {
                    svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Globe_icon-white.svg/1200px-Globe_icon-white.svg.png",
                  },
                },
              ],
            });
          }
        });
    }
  };

  render() {
    return (
      <div id="app">
        <Navbar handleChange={this.stateChange} />
        <Info data={this.state.infoData} />
        <Pictures flag={this.state.infoData[0].flags.svg} />
      </div>
    );
  }
}

export default App;
