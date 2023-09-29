import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Info from "./Info";
import Pictures from "./Pictures";
import SignIn from "./SignIn";

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
      route: "signin",
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
                  altSpellings: [
                    "This is not a country!",
                    "This is not a country!",
                    "This is not a country!",
                  ],
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

  changeRoute(route) {
    this.setState({ route: route });
  }

  login = () => {
    this.changeRoute("app");
  };

  register = () => {
    this.changeRoute("register");
  };

  signout = () => {
    this.changeRoute("signin");
  };

  render() {
    return (
      <div id="container">
        <div id="register"></div>
        {this.state.route === "signin" ? (
          <SignIn login={this.login} register={this.register} />
        ) : (
          <div id="app">
            <Navbar handleChange={this.stateChange} />
            <Info data={this.state.infoData} signout={this.signout} />
            <Pictures flag={this.state.infoData[0].flags.svg} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
