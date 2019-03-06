import React, { Component } from "react";
import "./App.css";
import { CountDown } from "./CountDown";

class App extends Component {
  state = {
    isWorking: true
  };

  onWorkComplete = () => {
    this.setState({ isWorking: false });
  };

  onBreakComplete = () => {
    this.setState({ isWorking: true });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isWorking ? (
            <>
              <p>working</p>
              <CountDown
                key="workingCountDown"
                initialCount={1000}
                delay={100}
                isRunning={false}
                onComplete={this.onWorkComplete}
              />
            </>
          ) : (
            <>
              <p>breaking</p>
              <CountDown
                key="breakingCountDown"
                initialCount={500}
                delay={100}
                isRunning={true}
                onComplete={this.onBreakComplete}
              />
            </>
          )}
        </header>
      </div>
    );
  }
}

export default App;
