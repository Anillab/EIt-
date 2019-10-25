import React, { Component } from 'react';
import  FormEit from './form.jsx'
import { state } from './form.jsx';
import Table from './table.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withTracker} from "meteor/react-meteor-data";
import { Meteor } from 'meteor/meteor';

class App extends Component {

  render(){
    return (
      <div className='App'>
          <h1>Eit</h1>

        {
          (this.props.currentUser)?
          (<div className='form'>
          <FormEit />
          </div>):("")


        }

          <div className='highlight'>
          </div>
      </div>
    )
  }
}

export default withTracker(()=>{
  return {currentUser:Meteor.user()}

})(App);
