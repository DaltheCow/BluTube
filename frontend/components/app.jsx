import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = (props) => (
  <div>
    {!['/login', '/signup'].includes(props.location.pathname) ? (
      <header>
        <Route path="/" component={NavBarContainer} />
      </header>
    ) : (null)}
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default withRouter(App);
