import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { SettingProvider } from "./Context";
import { HomeContainer } from "./home/HomeContainer";
import { SettingContainer } from "./setting/SettingContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <SettingProvider>
          <div className="App">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/setting">Setting</Link>
            </nav>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/setting" component={SettingContainer} />
          </div>
        </SettingProvider>
      </Router>
    );
  }
}

export default App;
