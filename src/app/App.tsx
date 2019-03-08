import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./Context";
import { HomeContainer } from "./home/HomeContainer";
import { LogContainer } from "./log/LogContainer";
import { SettingContainer } from "./setting/SettingContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <ContextProvider>
          <div className="App">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/log">Log</Link>
              <Link to="/setting">Setting</Link>
            </nav>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/log" component={LogContainer} />
            <Route path="/setting" component={SettingContainer} />
          </div>
        </ContextProvider>
      </Router>
    );
  }
}

export default App;
