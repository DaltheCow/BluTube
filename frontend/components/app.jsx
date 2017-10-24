import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';

const App = (props) => (
  <div>
    <Route exact path="/login" component={SessionFormContainer} />
    <Route exact path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
