import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Eits } from '../api/eit.js'
import Form from './form.jsx'
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

const TableHeader= () =>{
  return(
    <thead>
      <tr>
          <th>#</th>
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
        <tr key={eit._id}>
          <td><input type="checkbox" checked={eit.checked} onChange={e => {
            e.preventDefault();
            if (e.target.checked) {
              Meteor.call("eits.setChecked", eit._id, true);
            } else {
              Meteor.call("eits.setChecked", eit._id, false);
            }
          }} /></td>
          <td>{eit.firstName}</td>
          <td>{eit.lastName}</td>
          <td>{eit.email}</td>
          <td>{eit.phoneNumber}</td>
          <td>{eit.gender}</td>
          <td>{eit.country}</td>
   {(props.currentUser)?
     <td><button onClick={() => {
       Eits.remove(eit._id);
     }} > Delete</button></td>:("")}
     <td><button><Link to={`/edit/${eit._id}`}>Edit</Link></button></td>
     </tr>
      ))}
    </tbody>
  )
}

class Table extends Component{
   render(){
          // console.log(this.props.eits);

     return(
    <div className='Container'>
    <button onClick={() => {
      Meteor.call("eits.bulkDelete");
    }}> Delete Selected</button>
    <button> <Link to={`/`}>Back</Link></button>

    <table>
    <TableHeader />
    <TableBody currentUser={this.props.currentUser} eits={this.props.eits} />
    </table>
    </div>
     )
   }

    }

export default withTracker(()=>{
  return{
    eits:Eits.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(Table)
