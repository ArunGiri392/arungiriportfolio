import React, { useState } from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import "./style.css";

const Header = ({ toggle }) => {
  

  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src="/logo.png" alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Experiences
          </NavLink>


          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1zdQCVVhV7UK_mIZdz237V7mRCaVYFAQV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
