import React, { Component } from 'react';
import  FormEit from './form.jsx'
import { state } from './form.jsx'
import Table from './table.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  render(){
    return (
      <div className='App'>

      <h1>Welcome to Mest!</h1>
      <h3>Register Below</h3>
          <h1>Eit</h1>
          <div className='form'>
          <FormEit />
          </div>
          <div className='highlight'>
          <Table />
          </div>
      </div>
    )
  }
}
