import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ProtectedVideoRoute } from '../util/route_util';
import Video from './video/video';
import VideoFormContainer from './video/video_form_container';

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
      <ProtectedRoute path="/upload" component={VideoFormContainer} />
      <ProtectedVideoRoute path="/upload/:videoId" component={VideoFormContainer} />
    </Switch>
  </div>
);

export default withRouter(App);
