import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IconLogo } from 'shered/Icons';
import { StyledHeader, StyledNav, StyledLinks } from './style';

const Menu = () => (
  <StyledHeader>
    <StyledNav>
      <div className="logo">
        <a href="/" aria-label="home">
          <IconLogo />
        </a>
      </div>

      <StyledLinks>
        <ol>
          <NavItem>
            <Link to="/home">
              <NavLink>Home</NavLink>
            </Link>
          </NavItem>

          <NavItem>
            <Link to="/about">
              <NavLink>About</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about">
              <NavLink>Experience</NavLink>
            </Link>
          </NavItem>
        </ol>
      </StyledLinks>
    </StyledNav>
  </StyledHeader>
);

export default Menu;
