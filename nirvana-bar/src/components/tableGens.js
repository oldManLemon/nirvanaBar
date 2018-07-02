import React from 'react';
import {Table} from 'react-materialize';

export default class TableSatus extends React.Component{
  constructor(){
    super();
    this.state = {
        status: "Good",
        name: "Andrew",
        balance: 45
    };
    this.updateData = this.updateData.bind(this);
}

updateData(){
  this.setState({
    status: "Bad",
    name: "Matt H",
    balance: 1
  })
}
   render(){
       return(
        <Table>
        <thead>
        <tr>
          <th data-field="satus">Status</th>
          <th data-field="name">Name</th>
          <th data-field="price">Current Balance</th>
        </tr>
      </thead>
      <tbody>
        <td>{this.state.status}</td>
        <td>{this.state.name}</td>
        <td>{this.state.balance}</td>
        </tbody>
    
        </Table>
       );
   }
   
}