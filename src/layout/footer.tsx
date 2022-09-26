import React from "react";

import { version, github } from "../config";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <span className="text-muted">
        <a href={github.version}>{version}</a>
      </span>
    </div>
  </footer>
);

export default Footer;
