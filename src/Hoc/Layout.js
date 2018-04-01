import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import "./layout.css";

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSideNav = () => {
    this.setState({
      showNav: !this.state.showNav
    });
  };

  render() {
    return (
      <div>
        <Header showNav={this.state.showNav} toggleNav={this.toggleSideNav} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
