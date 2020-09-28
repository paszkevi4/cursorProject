import React, { useEffect } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import './App.css';

//
// Redux
import { connect, Provider } from 'react-redux';
import { setSettingsThunk } from '../src/redux/settingsReducer';
import { setChargeCategoriesThunk } from '../src/redux/chargeCategoriesReducer';
import { setIncomeCategoriesThunk } from '../src/redux/incomeCategoriesReducer';
import { setChargesThunk } from '../src/redux/chargesReducer';
import { fetchIncomesThunk } from '../src/redux/incomesReducer';

import store from './redux/store';

//
// Components
import Sidebar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePageContainer';
import Charts from './components/Charts/ChartsContainer';
import Categories from './components/Categories/CategoriesContainer';
import Settings from './components/Settings/SettingsContainer';

const App = (props) => {
  useEffect(() => {
    props.setSettingsThunk();
    props.setChargeCategoriesThunk();
    props.setIncomeCategoriesThunk();
    props.setChargesThunk();
    props.fetchIncomesThunk();
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <main>
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

const AppContainer = connect(null, {
  setSettingsThunk,

  setChargeCategoriesThunk,
  setIncomeCategoriesThunk,

  setChargesThunk,
  fetchIncomesThunk,
})(App);

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
