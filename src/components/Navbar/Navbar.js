import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <div>LOGO</div>
    {/* logo */}
    {/* navigation */}
    <NavLink to="/homepage">home</NavLink>
    <NavLink to="/charts">charts</NavLink>
    <NavLink to="/categories">categories</NavLink>
  </nav>
);

export default NavBar;
