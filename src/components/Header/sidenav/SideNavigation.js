import React from "react";
import SideNav from "react-simple-sidenav";
import SideNavItems from "./SideNavItems";

const SideNavigation = props => {
  return (
    <div>
      <SideNav
        showNav={props.showNav}
        navStyle={{
          background: "#242424"
        }}
      >
        <SideNavItems />
      </SideNav>
    </div>
  );
};

export default SideNavigation;
