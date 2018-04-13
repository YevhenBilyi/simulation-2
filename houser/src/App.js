import React, { Component } from 'react';
import Wizard from './component/Wizard/Wizard';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Dashboard/>
      <Wizard/>

      </div>
    );
  }
}

export default App;
