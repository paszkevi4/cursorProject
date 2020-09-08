import React from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";
import Charges from "./Charges";
import Incomes from "./Incomes";

// in props you have two arrays of objects:

// props.incomeCategories = [{name, description, date, icon}, {-||-} ... {-||-}]
// props.chargeCategories = [{name, description, date, icon}, {-||-} ... {-||-}]
//
//
//
// to set new object use the following:

// props.setIncomeCategory({newObj})
// props.setChargeCategory({newObj})

const Categories = (props) => {
  return (
    <HashRouter>
      <div>
        <div>
          <div>
            <h2>Categories</h2>
          </div>
          <div>
            <div>Balance</div>
            <div>$2,652.07</div>
          </div>
        </div>
        <div>
          <div>
            <NavLink to="/categories/charges">Charges</NavLink>
            <NavLink to="/categories/incomes">Incomes</NavLink>
          </div>
          <button>Add more</button>
        </div>
        <div>
          <Route
            path="/categories/charges"
            render={() => <Charges props={props.chargeCategories} />}
          />
          <Route
            path="/categories/incomes"
            render={() => <Incomes props={props.incomeCategories}/>}
          />
        </div>
      </div>
    </HashRouter>
  );
};

export default Categories;
