import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Charges from './Charges';
import Incomes from './Incomes';

// in props you have two arrays of objects:

// props.incomes = [{category, description, date, money}, {-||-} ... {-||-}]
// props.charges = [{category, description, date, money}, {-||-} ... {-||-}]
//
//
//
// for charge CRUD use the following:
//
// props.createIncome({newIncome})
// props.updateIncome(index, {updatedIncome})
// props.deleteIncome(index)
//
//
// for income CRUD use the following:
//
// props.createCharge({newCharge})
// props.updateCharge(index, {updatedCharge})
// props.deleteCharge(index)

const HomePage = (props) => {
  return (
    <HashRouter>
      <div>
        <div>
          <div>
            <h2>HOMEPAGE</h2>
          </div>
          <div>
            <h2>Balance</h2>
            <h1>$2,652.07</h1>
          </div>
        </div>
        <div>
          <div>
            <NavLink to="/homepage/charges">Charges</NavLink>
            <NavLink to="/homepage/incomes">Incomes</NavLink>
          </div>
          <div>
            <div>
              {/*<h4>{props.title}</h4>*/}
              <h4>Charges</h4>
              {/*<HomeSelect />*/}
            </div>
            <button>Add more</button>
          </div>
        </div>
        <div>
          <Route path="/homepage/charges" render={() => <Charges props={props.charges} />} />
          <Route path="/homepage/incomes" render={() => <Incomes props={props.incomes} />} />
        </div>
      </div>
    </HashRouter>
  );
};

export default HomePage;
