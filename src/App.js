import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Charts from './components/Charts/Charts';
import Categories from './components/Categories/Categories';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <div className="mainContent">
            <Route path="/homepage" render={() => <HomePage />} />
            <Route path="/charts" render={() => <Charts />} />
            <Route path="/categories" render={() => <Categories />} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
