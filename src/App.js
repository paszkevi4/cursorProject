import React, { useEffect } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import './App.css';

//
// Redux
import { connect, Provider } from 'react-redux';
import { setSettingsThunk } from '../src/redux/settingsReducer';
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
