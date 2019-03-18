import React from "react";
import { withRouter } from "react-router-dom";
import { Menu as GrommetMenu } from "grommet";

type Props = {
  history: any;
};

class Menu extends React.Component<any, Props> {
  render() {
    return (
      <GrommetMenu
        label="Menu"
        items={[
          {
            label: "Home",
            onClick: () => {
              this.props.history.push("/");
            }
          },
          {
            label: "Log",
            onClick: () => {
              this.props.history.push("/log");
            }
          },
          {
            label: "Setting",
            onClick: () => {
              this.props.history.push("/setting");
            }
          }
        ]}
      />
    );
  }
}

export default withRouter(Menu);
