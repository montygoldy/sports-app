import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { CURRENT_YEAR } from "../../config";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="logo">
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
      <div className="right">@NBA {CURRENT_YEAR} All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
