import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route, withRouter, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = (props) => (
  <div>
    {!['/login', '/signup'].includes(props.location.pathname) ? (
      <div>
        <Route path="/" component={NavBarContainer} />
      </div>
    ) : (null)}
    <header>
      <Link to="/" className="header-link">
        <h1>BluTube</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default withRouter(App);
