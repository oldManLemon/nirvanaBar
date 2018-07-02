import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nirvana Bar</h1>
        </header>
        <p className="App-intro">
          So this is to see updates <code>src/App.js</code> and save to reload So fast.
        </p>
      </div>
    );
  }
}

export default App;
