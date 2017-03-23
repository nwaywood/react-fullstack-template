import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
  <header>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </header>
);

export default Header;
