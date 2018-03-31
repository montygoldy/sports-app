import React from "react";
import "./footer.css";
import { CURRENT_YEAR } from "../../config";
const Footer = () => {
  return (
    <footer>
      <div className="right">@NBA {CURRENT_YEAR} All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
