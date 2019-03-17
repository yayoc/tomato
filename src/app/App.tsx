import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./App.css";
import { HomeContainer } from "./components/home/HomeContainer";
import { LogContainer } from "./components/log/LogContainer";
import { SettingContainer } from "./components/setting/SettingContainer";
import { Menu as GrommetMenu } from "grommet";

type Props = {
  history: any;
};

const Menu = (props: Props) => (
  <GrommetMenu
    label="Menu"
    items={[
      {
        label: "Home",
        onClick: () => {
          props.history.push("/");
        }
      },
      {
        label: "Log",
        onClick: () => {
          props.history.push("/log");
        }
      },
      {
        label: "Setting",
        onClick: () => {
          props.history.push("/setting");
        }
      }
    ]}
  />
);

const RouterMenu = withRouter(Menu);

export function App() {
  return (
    <Router>
      <div className="App">
        <RouterMenu />
        <Route path="/" exact component={HomeContainer} />
        <Route path="/log" component={LogContainer} />
        <Route path="/setting" component={SettingContainer} />
      </div>
    </Router>
  );
}
