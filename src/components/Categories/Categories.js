import React from "react";
import { NavLink, Route, HashRouter, Redirect } from "react-router-dom";

import Charges from "./Charges";
import Incomes from "./Incomes";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

//
// У такому форматi redux очiкуе отримувати категорii. Дата може буди як датою, так i стрiнгою:
// { name: 'Pets', description: 'For smth else', date: '26/08/20', icon: props.icons[0] },
//
//
// for charge CRUD use the following:
//
// props.createChargeCategory({newCategory})
// props.updateChargeCategory(index, {updatedCategory});
// props.deleteChargeCategory(index);
//
//
//
// for income CRUD use the following:
//
// props.createIncomeCategory({newCategory})
// props.updateIncomeCategory(index, {updatedCategory})
// props.deleteIncomeCategory(index)

const useStyles = makeStyles({
  Categories: {
    padding: "20px",
  },
  sectionToggle: {
    display: "flex",
    marginBottom: "20px",
  },
  toggleButton: {
    textDecoration: "none",
    color: "inherit",
    letterSpacing: "1px",
  },
  toggleButtonActive: {
    borderBottom: "1px solid cornflowerblue",
  },
  headerBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "100px",
  },
  balanceTitle: {
    textAlign: "right",
    fontSize: "1.2em",
    marginBottom: "10px",
  },
  balanceAmount: {
    fontSize: "1.7em",
    fontWeight: "bold",
  },
});

const Categories = (props) => {
  const classes = useStyles();
  return (
    <HashRouter>
      <div className={classes.Categories}>
        <div className={classes.headerBlock}>
          <div>
            <h2>Categories</h2>
          </div>
          <div className={classes.balanceBlock}>
            <div className={classes.balanceTitle}>Balance</div>
            <div className={classes.balanceAmount}>$2,652.07</div>
          </div>
        </div>
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
