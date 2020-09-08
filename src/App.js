import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePageContainer';
import Charts from './components/Charts/ChartsContainer';
import Categories from './components/Categories/CategoriesContainer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <div className="App">
            <Navbar />
            <div className="mainContent">
              <Route path="/homepage" render={() => <HomePage />} />
              <Route path="/charts" render={() => <Charts />} />
              <Route path="/categories" render={() => <Categories />} />
            </div>
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
