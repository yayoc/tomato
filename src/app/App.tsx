import React, { Component } from "react";
import "./App.css";
import { HomeContainer } from "./home/HomeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeContainer />
        </header>
      </div>
    );
  }
}

export default App;
