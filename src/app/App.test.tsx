import React from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "redux-react-hook";
import { store } from "./store";
import { App } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
