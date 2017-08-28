import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <ul className={this.props.className}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
