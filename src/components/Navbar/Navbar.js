import React from "react";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import CategoryIcon from "@material-ui/icons/Category";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  icon: {
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <NavLink to="/homepage" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/charts" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <ShowChartIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>Charts</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/categories" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <CategoryIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>Categories</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/settings" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default Navbar;
