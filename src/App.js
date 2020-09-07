import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="mainContent"></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
