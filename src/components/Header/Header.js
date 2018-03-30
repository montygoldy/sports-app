import React from "react";
import "./header.css";
import Navbar from "./Navbar";
import SideNavigation from "./sidenav/SideNavigation";
import Logo from "./Logo";

const Header = props => {
  return (
    <header className="header">
      <div className="headerOpt">
        <SideNavigation {...props} />
        <Navbar toggleSideNav={props.toggleNav} />
        <Logo />
      </div>
    </header>
  );
};

export default Header;
