import React, { useEffect } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import './App.css';

//
// Redux
import { initializeAppThunk } from './store/redux/appReducer';
import { connect, Provider } from 'react-redux';
import { setSettingsThunk } from './store/redux/settingsReducer';
import { setChargeCategoriesThunk } from './store/redux/chargeCategoriesReducer';
import { setIncomeCategoriesThunk } from './store/redux/incomeCategoriesReducer';
import { setChargesThunk } from './store/redux/chargesReducer';
import { fetchIncomesThunk } from './store/redux/incomesReducer';

import store from './store/redux/store';

//
// Components
import Sidebar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePageContainer';
import Charts from './components/Charts/ChartsContainer';
import Categories from './components/Categories/CategoriesContainer';
import Settings from './components/Settings/SettingsContainer';

const App = (props) => {
  useEffect(() => {
    props.initializeAppThunk();
    // props.setSettingsThunk();
    // props.setChargeCategoriesThunk();
    // props.setIncomeCategoriesThunk();
    // props.setChargesThunk();
    // props.fetchIncomesThunk();
  }, []);

  return (
    <div className="app">
      <Sidebar />
      {props.initialized && (
        <main>
          <Route exact path="/">
            <Redirect to="/homepage" />
          </Route>
          <Route path="/homepage" render={() => <HomePage />} />
          <Route path="/charts" render={() => <Charts />} />
          <Route path="/categories" render={() => <Categories />} />
          <Route path="/settings" render={() => <Settings />} />
        </main>
      )}
    </div>
  );
};

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = connect(mapStateToProps, { initializeAppThunk })(App);

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
