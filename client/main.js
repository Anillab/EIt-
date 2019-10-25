import React from 'react';
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom';

import AppRouter from '../lib/routes.js';

Meteor.startup(()=>{
  render(<AppRouter />,document.getElementById('root'));
});
