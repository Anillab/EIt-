import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AccountsUIWrapper from '../imports/ui/AccountsUIWrapper.js';
import App from '../imports/ui/App.js';
import EditEIT from '../imports/ui/EditEIT.js';
import Table from '../imports//ui/table.jsx';
export default function Flow() {
  return (
    <Router>
      <div>
      <header>

      <h1>Welcome to Mest!</h1>
      <h3>Register Below</h3>
      < AccountsUIWrapper />
      </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/edit/:id" component={EditEIT} />
          <Route exact path="/table" component={Table} />

        </Switch>
      </div>
    </Router>
  );
}
