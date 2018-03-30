import React from "react";
import FontAwesome from "react-fontawesome";

const Navbar = props => (
  <div className="bars">
    <FontAwesome
      onClick={props.toggleSideNav}
      name="bars"
      style={{
        color: "#dfdfdf",
        padding: "10px",
        cursor: "pointer"
      }}
    />
  </div>
);

export default Navbar;
