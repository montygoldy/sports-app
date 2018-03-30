import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="logo">
    <img alt="nba logo" src="/images/nba_logo.png" />
  </Link>
);

export default Logo;
