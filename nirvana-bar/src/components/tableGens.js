import React from 'react';
import { Table, Button } from 'react-materialize';
import Thead from '../components/thead';



export default class TableSatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      title: 'Current User Balance Sheet',
      type: "balance"

    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(users => this.setState({ users: [] },  () => console.log('Fetched: ', users)));
  }
  handleClick(e) {
    console.log("Click")
    this.setState({
      users: this.state.users,
      title: this.state.title,
      type: "previous"
    })


  }

  render() {
    console.log("Props: ", this.props);
    return (
      <div className="container">
        <h2>{this.state.title}</h2>
        <Table>
          <Thead type={this.state.type} />
          <tbody>
            {this.state.users.map(users =>
              <tr key={users.ID}><td>{users.Status}</td><td>{users.firstName} {users.lastName}</td><td>{users.currentBalance}</td></tr>
            )}
          </tbody>


        </Table>
        <Button onClick={this.handleClick}>Previous</Button>
      </div>


    );

  }

}
export class TableDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      title: 'Current User Balance Sheet'

    };

  }
  componentDidMount() {
    fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {

    return (<div className="container">
      <Table>
        <thead>
          <tr>
            <th data-field="satus">Status</th>
            <th data-field="name">Name</th>
            <th data-field="price">Current Balance</th>
            <th data-field="price">Previous Balance</th>
          </tr>
        </thead>
        {<tbody>
          {this.state.users.map(users =>
            <tr key={users.ID}><td>{users.Status}</td><td>{users.firstName} {users.lastName}</td><td>{users.currentBalance}</td><td>{users.previousBalance}</td></tr>
          )}
        </tbody>}
      </Table>
    </div>);

  }

}
