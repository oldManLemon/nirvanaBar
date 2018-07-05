import React, { Component } from 'react';
import './App.css';

import NavBar from './components/nav';
import TableStatus from './components/tableGens';


class App extends Component {
  render() {
    return (
   
      <div>
       <NavBar/>
       <TableStatus />
       
      </div>
    );
  }
}

export default App;
