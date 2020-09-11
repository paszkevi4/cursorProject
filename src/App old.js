import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePageContainer';
import Charts from './components/Charts/ChartsContainer';
import Categories from './components/Categories/CategoriesContainer';
import Settings from './components/Settings/SettingsContainer';

// delete this component
import Temp from './components/TemporaryComponent/TempContainer';

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
              <Route path="/settings" render={() => <Settings />} />
              {/* <Route path="/temp" render={() => <Temp />} /> */}
            </div>
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
