import React, { Component } from "react";
import "./App.css";
import { CountDown } from "./CountDown";

class App extends Component {
  onComplete = () => {
    console.log("completed");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CountDown
            initialCount={1000}
            delay={100}
            isRunning={true}
            onComplete={this.onComplete}
          />
        </header>
      </div>
    );
  }
}

export default App;
