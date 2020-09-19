import React, { useEffect } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

//
// Redux
import { connect, Provider } from 'react-redux';
import { setSettingsThunk } from '../src/redux/settingsReducer';
import store from './redux/store';

//
// Styles
import { useStyles1 } from './AppStyles';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import logo from './assets/img/logo_white.png';

//
// Components
import Sidebar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePageContainer';
import Charts from './components/Charts/ChartsContainer';
import Categories from './components/Categories/CategoriesContainer';
import Settings from './components/Settings/SettingsContainer';

//
// delete if unnecessary
import PropTypes from 'prop-types';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      paddingTop: '10px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#3f51b5',
    border: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: '100px',
  },
  mainLogo: {
    maxWidth: '50px',
  },
}));

const App = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    props.setSettingsThunk();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap>
            <img src={logo} alt="main_logo" className={classes.mainLogo} />
            Money Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            <Sidebar />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            <Sidebar />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <Route exact path="/">
          <Redirect to="/homepage" />
        </Route>
        <Route path="/homepage" render={() => <HomePage />} />
        <Route path="/charts" render={() => <Charts />} />
        <Route path="/categories" render={() => <Categories />} />
        <Route path="/settings" render={() => <Settings />} />
      </main>
    </div>
  );
};

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

const AppContainer = connect(null, { setSettingsThunk })(App);

const MainAppContainer = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainAppContainer;
