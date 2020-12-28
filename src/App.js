import React, { Component } from "react";

import Toolbar from "components/Toolbar/Toolbar";
import SideDrawer from "components/SideDrawer/SideDrawer";
import Personnel from "pages/PersonnelList";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    matches: window.matchMedia("(min-width: 768px)").matches,
  };

  drawerToogleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addListener(handler);
  }

  render() {
    let sideDrawer;

    if (this.state.matches) {
      sideDrawer = <SideDrawer />;
    }

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToogleClickHandler} />
        {sideDrawer}
        <main>
          <Personnel />
        </main>
      </div>
    );
  }
}

export default App;
