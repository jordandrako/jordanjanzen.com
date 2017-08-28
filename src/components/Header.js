import React from "react";
import Navigation from "./Navigation";

const Header = props =>
  <header>
    <h1>Jordan Janzen</h1>
    <h3 className="tagline">
      <span>
        {props.tagline}
      </span>
    </h3>
    <Navigation />
  </header>;

export default Header;
