import React, { Component } from "react";
import Header from "../components/Header/Header";
import "./layout.css";

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSideNav = () => {
    this.setState(state => ({
      showNav: !state.showNav
    }));
  };

  render() {
    return (
      <div>
        <Header showNav={this.state.showNav} toggleNav={this.toggleSideNav} />
      </div>
    );
  }
}

export default Layout;
