import React, { Component } from 'react';
import { Eits } from '../api/eit.js';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Table from './table.jsx';
import {withTracker} from "meteor/react-meteor-data";
import { Link } from 'react-router-dom';

export default class FormEit extends Component{

  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    country:""

  };

handleChange= event =>{
  this.setState(
  {[event.target.name]:event.target.value}
  )
}
onSubmit= event =>{
  event.preventDefault();
  console.log(this.state);
  Eits.insert(this.state)
  this.setState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    country:""

  })
}

  render(){
    return(
      <form>
  <label>
    First Name:
    <input type="text" name="firstName"
    value={this.state.firstName} onChange={event =>this.handleChange(event)}

    />

  </label>
  <br />
  <label>
    Surname:
    <input type="text" name="lastName"
    value={this.state.lastName}
    onChange={event =>this.handleChange(event)}


     />
  </label>
  <br />
  <label>
    Email Adress:
    <input type="text" name="email"
    value={this.state.email}
    onChange={event =>this.handleChange(event)}

    />

  </label>
  <br />
  <label>
    Phone Number:
    <input type="text" name="phoneNumber"
    value={this.state.phoneNumber}
    onChange={event =>this.handleChange(event)}

    />
  </label>
  <br />
  <label>
    Gender:
    <input type="text" name="gender"
    value={this.state.gender}
    onChange={event =>this.handleChange(event)}

    />
    </label>
  <br />
  <label>
    Country:
    <input type="text" name="country"
    value={this.state.country}
    onChange={event =>this.handleChange(event)}

     />
  </label>

  <button onClick={event =>this.onSubmit(event)}>Submit</button>
  <button> <Link to={`/table/`}>View EITs</Link></button>

</form>

    )
  }
}
