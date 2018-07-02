import React from 'react';
import { NavItem } from 'react-materialize';

export default class NavItemsList extends React.Component{

    render(){
        return(<div>
            <NavItem onClick={() => console.log('Sec1')}>Section 1</NavItem>
            <NavItem onClick={() => console.log('Sec2')}>Section 2</NavItem>
            <NavItem onClick={() => console.log('Sec3')}>Section 3</NavItem>
            </div>
        );
    }
}