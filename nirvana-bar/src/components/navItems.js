import React from 'react';
import { NavItem } from 'react-materialize';

export default class NavItemsList extends React.Component{

    render(){
        return(<div>
            <NavItem onClick={() => console.log('Sec1')}>Home</NavItem>
            <NavItem onClick={this.props.previous}>Previous</NavItem>
            <NavItem onClick={() => console.log('Sec3')}>Purchases</NavItem>
            </div>
        );
    }
}