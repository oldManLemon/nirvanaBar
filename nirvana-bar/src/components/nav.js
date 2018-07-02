import React from 'react';
import { Navbar } from 'react-materialize';
import NavItemsList from './navItems';

export default class NavBar extends React.Component{
    render(){
        return(
            <Navbar className="blue darken-4" brand='B&W NirvanaBar' right>
 <NavItemsList/>
</Navbar>
        );
    }
}