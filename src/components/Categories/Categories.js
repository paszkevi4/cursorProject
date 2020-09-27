import React from 'react';
import { NavLink, Route, HashRouter, Redirect } from 'react-router-dom';

import Charges from './Charges';
import Incomes from './Incomes';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Common/Header/HedaerContainer';

const useStyles = makeStyles({
  // Categories: {
  //   padding: '20px',
  // },
  sectionToggle: {
    display: 'flex',
    marginBottom: '20px',
  },
  toggleButton: {
    textDecoration: 'none',
    color: 'inherit',
    letterSpacing: '1px',
  },
  toggleButtonActive: {
    borderBottom: '1px solid cornflowerblue',
  },
});

const Categories = (props) => {
  const classes = useStyles();
  return (
    <HashRouter>
      <div className={classes.Categories}>
        {/* <div className={classes.headerBlock}>
          <div>
            <h2>Categories</h2>
          </div>
          <div className={classes.balanceBlock}>
            <div className={classes.balanceTitle}>Balance</div>
            <div className={classes.balanceAmount}>$2,652.07</div>
          </div>
        </div> */}
        <Header title="Categories" />
        <div className={classes.sectionToggle}>
          <Button color="primary">
            <NavLink
              to="/categories/charges"
              className={classes.toggleButton}
              activeClassName={classes.toggleButtonActive}>
              Charges
            </NavLink>
          </Button>
          <Button color="primary">
            <NavLink
              to="/categories/incomes"
              className={classes.toggleButton}
              activeClassName={classes.toggleButtonActive}>
              Incomes
            </NavLink>
          </Button>
        </div>
        <div>
          <Route exact path="/categories/">
            <Redirect to="/categories/charges" />
          </Route>
          <Route path="/categories/charges" render={() => <Charges props={props} />} />
          <Route path="/categories/incomes" render={() => <Incomes props={props} />} />
        </div>
      </div>
    </HashRouter>
  );
};

export default Categories;
