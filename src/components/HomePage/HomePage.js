import React from 'react';
import { HashRouter, NavLink, Redirect, Route } from 'react-router-dom';
import Charges from './Charges';
import Incomes from './Incomes';
import './HomePage.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Common/Header/HedaerContainer';

const useStyles = makeStyles({
  home: {
    padding: '20px',
  },
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
  // headerBlock: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'top',
  //   // marginBottom: '100px',
  // },
  // headerBalance: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   // justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginBottom: '100px',
  // },
  // balanceTitle: {
  //   textAlign: 'right',
  //   fontSize: '1.2em',
  //   marginBottom: '10px',
  // },
  // balanceAmount: {
  //   fontSize: '1.7em',
  //   fontWeight: 'bold',
  // },
});

const HomePage = (props) => {
  const classes = useStyles();
  return (
    <HashRouter>
      <div className={classes.home}>
        {/* <div className={classes.headerBlock}>
          <div>
            <h2>HOMEPAGE</h2>
          </div>
          <div className={classes.headerBalance}>
            <h2 className={classes.balanceTitle}>Balance</h2>
            <h1 className={classes.balanceAmount}>$2,652.07</h1>
          </div>
        </div> */}
        <Header title="Homepage" />
        <div className={classes.sectionToggle}>
          <Button color="primary">
            <NavLink
              to="/homepage/charges"
              className={classes.toggleButton}
              activeClassName={classes.toggleButtonActive}>
              Charges
            </NavLink>
          </Button>
          <Button color="primary">
            <NavLink
              to="/homepage/incomes"
              className={classes.toggleButton}
              activeClassName={classes.toggleButtonActive}>
              Incomes
            </NavLink>
          </Button>
        </div>
        <div>
          <Route exact path="/homepage/">
            <Redirect to="/homepage/charges" />
          </Route>

          <Route
            path="/homepage/charges"
            render={() => <Charges charges={props.charges}
                                   categories={props.chargeCategories}
                                   deleteMoney={props.deleteCharge}
                                   updateCharge={props.updateCharge}
                                   createCharge={props.createCharge}
                                   />}
          />
          <Route
            path="/homepage/incomes"
            render={() => <Incomes incomes={props.incomes}
                                   categories={props.incomeCategories}
                                   deleteMoney={props.deleteIncome}
                                   updateIncome={props.updateIncome}
                                   createIncome={props.createIncome}
                                  />}
          />
        </div>
      </div>
    </HashRouter>
  );
};

export default HomePage;
