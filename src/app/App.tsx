import React, { Component } from "react";
import "./App.css";
import { HomeContainer } from "./home/HomeContainer";
import { SettingContainer } from "./setting/SettingContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeContainer />
          <SettingContainer />
        </header>
      </div>
    );
  }
}

export default App;
