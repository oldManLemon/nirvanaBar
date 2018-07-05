import React from 'react';
//import { Table } from 'react-materialize';


export default class Thead extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "Status",
            name: "Name",
            current: "Current",
            previous: "Previous"

        };


    }

    /*  componentDidMount(props){
                
         this.setState({
                      status: "Status",
                      name: "Name",
                      current: "Current",
                      previous: 'Previous'
                });
              } 
     */

    render() {
        if (this.props.type === "balance") {
            this.props = {
                status: "Status",
                name: "Name",
                current: "Current",
                previous: "",
                type: "balance"

            }
        } else {
            this.props = {
                status: "Status",
                name: "Name",
                current: "Current",
                previous: "Previous",
                type : "previous"
            }
        }
        return (


            <thead>
                <tr>
                    <th data-field="satus">{this.props.status}</th>
                    <th data-field="name">{this.props.name}</th>
                    <th data-field="price">{this.props.current}</th>
                    <th data-field="price">{this.props.previous}</th>
                </tr>
            </thead>


        );
    }
}