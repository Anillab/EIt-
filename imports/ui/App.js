import React, { Component } from 'react';
import  FormEit from './form.jsx'
import { state } from './form.jsx';
import Table from './table.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import {withTracker} from "meteor/react-meteor-data";
import { Meteor } from 'meteor/meteor';
class App extends Component {

  render(){
    return (
      <div className='App'>
      <header>

      <h1>Welcome to Mest!</h1>
      <h3>Register Below</h3>
      < AccountsUIWrapper />
      </header>
          <h1>Eit</h1>

        {
          (this.props.currentUser)?
          (<div className='form'>
          <FormEit />
          </div>):("")


        }

          <div className='highlight'>
          <Table />
          </div>
      </div>
    )
  }
}

export default withTracker(()=>{
  return {currentUser:Meteor.user()}

})(App);
