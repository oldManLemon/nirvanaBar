import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from '../src/components/hello';
import NavBar from './components/nav';
import TableGen from './components/tableGens';

class App extends Component {
  render() {
    return (
   
      <div>
       <NavBar/>
       <TableGen/>
      </div>
    );
  }
}

export default App;
