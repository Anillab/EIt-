import React from 'react';
import { withTracker } from "meteor/react-meteor-data";

import { Eits } from '../api/eit.js'
import { Meteor } from 'meteor/meteor';

class EditEIT extends React.Component {

  onSubmit= event => {
    event.preventDefault();

    const id = this.props.match.params.id;

      const data = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        phoneNumber: event.target.phoneNumber.value,
        gender: event.target.gender.value,
        country: event.target.country.value,
      }

    console.log(event.target.firstName);
    Meteor.call('eits.update', id, data);

    this.props.history.push('/');
  }

  render() {
    const eit = this.props.eit;
    // console.log(this.props.eit);
    return (
      <form onSubmit={this.onSubmit}>
  <label>
    First Name:
    <input type="text"
    name="firstName"
    defaultValue={eit? eit.firstName : ''}
    />

  </label>
  <br />
  <label>
    Surname:
    <input type="text" name="lastName"
    defaultValue={eit? eit.lastName : ''}
     />
  </label>
  <br />
  <label>
    Email Adress:
    <input type="text" name="email"
    defaultValue={eit? eit.email : ''}
    />

  </label>
  <br />
  <label>
    Phone Number:
    <input type="text" name="phoneNumber"
    defaultValue={eit? eit.phoneNumber : ''}
    />
  </label>
  <br />
  <label>
    Gender:
    <input type="text" name="gender"
    defaultValue={eit? eit.gender : ''}
    />
    </label>
  <br />
  <label>
    Country:
    <input type="text" name="country"
    defaultValue={eit? eit.country : ''}
     />
  </label>

  <button>Submit</button>
</form>
    );
  }
}

export default withTracker(props => {
  return {
    eit: Eits.findOne(props.match.params.id)
  }
})(EditEIT);
