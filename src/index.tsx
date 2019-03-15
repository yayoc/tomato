import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app/App";
import { store } from "./app/store";
import { StoreProvider } from "./app/Context";
import { actions } from "./app/modules/logs";
import * as serviceWorker from "./serviceWorker";
import localforage from "localforage";

localforage.config({
  name: "tomato-db",
  storeName: "tomato-store"
});

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

store.dispatch(actions.loadSessionsRequest());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
