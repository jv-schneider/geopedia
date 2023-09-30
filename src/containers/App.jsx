import React from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Pictures from "../components/Pictures";
import Form from "./Form";
import AccountInfo from "../components/AccountInfo";

class App extends React.Component {
  constructor() {
    super();
    this.backendServer = "http://localhost:3000/";
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
      user: {
        username: "",
        password: "",
        entries: 0,
      },
    };
  }

  componentDidMount() {
    fetch(this.state.countryURL)
      .then((r) => r.json())
      .then((r) => this.setState({ infoData: r }));
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
          try {
            if (r[0].hasOwnProperty("capital")) {
              this.setState({ infoData: r });
              fetch(this.backendServer + "enter", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  username: this.state.user.username,
                }),
              })
                .then((r) => r.json())
                .then((r) => {
                  if (r === "success") {
                    this.state.user.entries++;
                    console.log(this.state.user);
                  }
                });
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

  changeRoute = (route) => {
    this.setState({ route: route });
  };

  updateUser = (user) => {
    this.setState({
      user: {
        username: user.username,
        password: user.password,
        entries: user.entries,
      },
    });
  };

  render() {
    return (
      <div id="container">
        <div id="register"></div>
        {this.state.route === "signin" ? (
          <Form
            changeRoute={this.changeRoute}
            updateUser={this.updateUser}
            backendServer={this.backendServer}
          />
        ) : (
          <div id="app">
            <Navbar handleChange={this.stateChange} />
            <Info data={this.state.infoData} />
            <Pictures flag={this.state.infoData[0].flags.svg} />
            <AccountInfo
              signout={() => {
                this.setState({ route: "signin" });
              }}
              name={this.state.user.username}
              entries={this.state.user.entries}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
