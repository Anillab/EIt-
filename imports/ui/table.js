import React, { Component } from 'react';
import { Eits } from '../api/eit.js'
import Form from './form.js'
import { withTracker } from 'meteor/react-meteor-data';

const TableHeader= () =>{
  return(
    <thead>
      <tr>
          <th></th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email Adress</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Country</th>
          <th>Delete</th>
          <th>Edit</th>



      </tr>

    </thead>
  )
}
const TableBody=(props) =>{
  return(
    <tbody>
      {props.eits.map(eit => (
        <tr>
          <td><input type="checkbox" /></td>
          <td>{eit.firstName}</td>
          <td>{eit.lastName}</td>
          <td>{eit.email}</td>
          <td>{eit.phoneNumber}</td>
          <td>{eit.gender}</td>
          <td>{eit.country}</td>
          <td><button onClick={() => {
            Eits.remove(eit._id);
          }} > Delete</button></td>
          <td><button> Edit</button></td>

        </tr>
      ))}
    </tbody>

  )
}

class Table extends Component{
   render(){
          console.log(this.props.eits);

     return(
    <div className='Container'>
    <button> Delete All</button>
    <table>
    <TableHeader />
    <TableBody eits={this.props.eits} />
    </table>
    </div>
     )
   }

    }

export default withTracker(()=>{
  return{
    eits:Eits.find({}).fetch(),
  };
})(Table)
