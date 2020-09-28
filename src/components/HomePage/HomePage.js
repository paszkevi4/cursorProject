import React from 'react';
import { HashRouter, NavLink, Redirect, Route } from 'react-router-dom';

//
// Styles
import './HomePage.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//
// Components
import Charges from './Charges';
import Incomes from './Incomes';
import Header from '../Common/Header/HedaerContainer';

//
//
//
import { totalCounter } from '../Common/Functions';
import { totalIncomes } from '../Common/Functions';
import { TabsAreaStyles } from '../Styles';
//
// totalCounter(props.incomes, props.charges)
//
//
const useStyles = makeStyles(TabsAreaStyles);

const HomePage = (props) => {
  const classes = useStyles();
  return (
    <HashRouter>
      <div className={classes.home}>
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
            render={() => (
              <Charges
                charges={props.charges}
                categories={props.chargeCategories}
                deleteMoney={props.deleteCharge}
                updateCharge={props.updateCharge}
                createCharge={props.createCharge}
                avatar={props.avatar}
                total={totalCounter(props.incomes, props.charges)}
                totalIncome={totalIncomes(props.incomes)}
              />
            )}
          />
          <Route
            path="/homepage/incomes"
            render={() => (
              <Incomes
                incomes={props.incomes}
                categories={props.incomeCategories}
                deleteMoney={props.deleteIncome}
                updateIncome={props.updateIncome}
                createIncome={props.createIncome}
                avatar={props.avatar}
              />
            )}
          />
        </div>
      </div>
    </HashRouter>
  );
};

export default HomePage;
