import React from "react";
import { Link } from "react-router-dom";

const MainNav = () =>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
    </ul>
  </nav>;

export default MainNav;
