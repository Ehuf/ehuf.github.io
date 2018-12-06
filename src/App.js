import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Particles from "react-particles-js";

const bgParams = {
  particles: {
    number: {
      value: 150,
      size: 200,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Particles
          width="100%"
          height="100%"
          params={bgParams}
        />
        <Navigation />
        <Landing />
      </div>
    );
  }
}

export default App;
