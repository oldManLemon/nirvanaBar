import React from 'react';
import {Table} from 'react-materialize';

export default class TableGen extends React.Component{
   
   render(){
       return(
        <Table>
        <thead>
        <tr>
          <th data-field="satus">Status</th>
          <th data-field="name">Name</th>
          <th data-field="price">CurrentBalance</th>
        </tr>
      </thead>
    
        </Table>
       );
   }
   
}