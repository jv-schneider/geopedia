import React from "react";
import "./App.css";
import Searchbar from "../components/Searchbar";
import Navbar from "./Navbar";
import Info from "./Info";
import Pictures from "./Pictures";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        <Info />
        <Pictures />
      </div>
    );
  }
}

export default App;
