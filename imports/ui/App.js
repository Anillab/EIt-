import React, { Component } from 'react';
import  Form from './form.js'
import { state } from './form.js'
import Table from './table.js'

export default class App extends Component {

  render(){
    return (
      <div className='App'>
      <h1>Welcome to Mest!</h1>
      <h3>Register Below</h3>
          <h1>Eit</h1>
          <div className='form'>
          <Form />
          </div>
          <div className='highlight'>
          <Table />
          </div>
      </div>
    )
  }
}
