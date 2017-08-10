import React from "react";

import logo from "../logo.svg";
import MainNav from "./MainNav";

const Header = () =>
  <header>
    <img src={logo} alt="Logo" width="120" />
    <MainNav />
  </header>;

export default Header;
