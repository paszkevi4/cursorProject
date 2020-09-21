import React from 'react';
import { NavLink } from 'react-router-dom';

//
// Styles
import './Navbar.css';
import { List } from '@material-ui/core';
import logo from '../../assets/img/logo_white.png';

//
// Icons
import HomeIcon from '@material-ui/icons/Home';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import CategoryIcon from '@material-ui/icons/Category';
import SettingsIcon from '@material-ui/icons/Settings';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>Money Tracker</h2>
      </div>
      <List>
        <NavLink to="/homepage" activeClassName="active">
          <div className="link-container">
            <HomeIcon />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to="/charts" activeClassName="active">
          <div className="link-container">
            <ShowChartIcon />
            <p>Charts</p>
          </div>
        </NavLink>
        <NavLink to="/categories" activeClassName="active">
          <div className="link-container">
            <CategoryIcon />
            <p>Categories</p>
          </div>
        </NavLink>
        <NavLink to="/settings" activeClassName="active">
          <div className="link-container">
            <SettingsIcon />
            <p>Settings</p>
          </div>
        </NavLink>
      </List>
    </nav>
  );
};

export default Navbar;
