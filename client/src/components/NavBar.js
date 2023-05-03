import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar-wrap">
      <div className="logoLeft"></div>
      <div className="navRight">
        <ul className="navUl">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="navLi">
            <NavLink to="/favourites">FAVOURITES</NavLink>
          </li>
          <li>
            <NavLink to="/liked">LIKED</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
