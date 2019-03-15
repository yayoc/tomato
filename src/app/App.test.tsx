import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./Context";
import { store } from "./store";
import { App } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StoreProvider store={store}>
      <App />
    </StoreProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
