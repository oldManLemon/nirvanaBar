import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from '../src/components/hello';
import NavBar from './components/nav';
import TableStatus from './components/tableGens';
import TestButtonData from './components/buttonTest';

class App extends Component {
  render() {
    return (
   
      <div>
       <NavBar/>
       <TableStatus />
       <TestButtonData/>
      </div>
    );
  }
}

export default App;
