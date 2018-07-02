import React from 'react';
import {Button} from 'react-materialize';
import TableStatus from '../components/tableGens';


export default class TestButtonData extends React.Component{
 
    render(){
        return(
            <Button  onClick= {this.updateData} >
                    Click me!
            </Button>
        );
    }
}