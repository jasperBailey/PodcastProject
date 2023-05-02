import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const NavBar = () => {
  return (
    <SidenavDiv>
      <nav>
        <SidenavUl>
          <SidenavLi>
            <StyledNavLink to="/">HOME</StyledNavLink>
            {/* Home will bring up search bar  */}
          </SidenavLi>
          <SidenavLi>
            <StyledNavLink to="/favourites">FAVOURITES</StyledNavLink>
          </SidenavLi>
          <SidenavLi>
            <StyledNavLink to="/queue">QUEUE</StyledNavLink>
          </SidenavLi>
          <SidenavLi>
            <StyledNavLink to="/liked">LIKED</StyledNavLink>
          </SidenavLi>
        </SidenavUl>
      </nav>
    </SidenavDiv>
  );
};

export default NavBar;

export const SidenavDiv = styled.div`
  height: 100%;
  width: 0;
  z-index: 1;
  top: 0;
  right: 0; /* position to the right */
  background-color: #111;
  margin-top: 40px;
  margin-left: 700px;
`;

export const SidenavUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap; /* prevent wrapping */
  justify-content: flex-end; /* align to the right */
`;

export const SidenavLi = styled.li`
  color: black;
  padding-left: 0;
  margin-right: 15px; /* add some space between links */
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;