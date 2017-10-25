import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route, withRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = (props) => (
  <div>
    {!['/login', '/signup'].includes(props.location.pathname) ? (
      <div>
        <Route path="/" component={NavBarContainer} />
      </div>
    ) : (null)}
    <AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />
  </div>
);

export default withRouter(App);
