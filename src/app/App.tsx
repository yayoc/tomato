import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { HomeContainer } from "./components/home/HomeContainer";
import { LogContainer } from "./components/log/LogContainer";
import { SettingContainer } from "./components/setting/SettingContainer";

export function App() {
  return (
    <Router>
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
    </Router>
  );
}
