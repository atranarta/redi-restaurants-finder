import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/images/home-24px.svg";

import "./Header.scss";

const Header = () => (
  <header>
    <div className="title-wrapper">
    <Link to="/">
      <img className="home-icon" src={homeIcon} alt="home icon" />
    </Link>
    <h1>Find your perfect place to eat</h1>
    </div>
  </header>
);

export default Header;
