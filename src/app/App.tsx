import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logger from "redux-logger";
import "./App.css";
import { StoreProvider } from "./Context";
import { HomeContainer } from "./components/home/HomeContainer";
import { LogContainer } from "./components/log/LogContainer";
import { SettingContainer } from "./components/setting/SettingContainer";
import { reducer as settingReducer } from "./modules/setting";
import {
  reducer as logsReducer,
  actions,
  loadSessionsMiddleware,
  setWorkSessionMiddleware,
  setBreakSessionMiddleware,
  updateWorkSessionNoteMiddleware
} from "./modules/logs";

const reducer = combineReducers({
  logs: logsReducer,
  setting: settingReducer
});
const store = createStore(
  reducer,
  applyMiddleware(
    loadSessionsMiddleware as any,
    setWorkSessionMiddleware as any,
    setBreakSessionMiddleware as any,
    updateWorkSessionNoteMiddleware as any,
    logger
  )
);

store.dispatch(actions.loadSessionsRequest());

class App extends Component {
  render() {
    return (
      <Router>
        <StoreProvider store={store}>
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
        </StoreProvider>
      </Router>
    );
  }
}

export default App;
