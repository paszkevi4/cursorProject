import React from "react";
import { NavLink, Route, HashRouter, Redirect } from "react-router-dom";

import Charges from "./Charges";
import Incomes from "./Incomes";
import Header from "../Common/Header/HeaderContainer";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { TabsAreaStyles } from "../Styles";

const useStyles = makeStyles(TabsAreaStyles);

const Categories = (props) => {
  const classes = useStyles();
  return (
    <HashRouter>
      <div className={classes.Categories}>
        <Header title="Categories" />
        <div className={classes.sectionToggle}>
          <Button color="primary">
            <NavLink
              to="/categories/charges"
              className={classes.toggleButton}
              activeClassName={classes.toggleButtonActive}
            >
              Charges
            </NavLink>
          </Button>
          <Button color="primary">
            <NavLink
              to="/categories/incomes"
              className={classes.toggleButton}
              activeClassName={classes.toggleButtonActive}
            >
              Incomes
            </NavLink>
          </Button>
        </div>
        <div>
          <Route exact path="/categories/">
            <Redirect to="/categories/charges" />
          </Route>
          <Route
            path="/categories/charges"
            render={() => <Charges props={props} />}
          />
          <Route
            path="/categories/incomes"
            render={() => <Incomes props={props} />}
          />
        </div>
      </div>
    </HashRouter>
  );
};

export default Categories;
