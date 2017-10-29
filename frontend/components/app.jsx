import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Redirect, Link, Route, withRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ProtectedVideoRoute } from '../util/route_util';
import Video from './video/video';
import VideoFormContainer from './video/video_form_container';
import VideoShowContainer from './video/video_show_container';

const App = (props) => (
  <div>
    {!['/login', '/signup'].includes(props.location.pathname) ? (
      <header>
        <Route path="/" component={NavBarContainer} />
      </header>
    ) : (null)}
    <Switch>
      <Route exact path="/" render={() => <div></div>} />
      <Route exact path="/videos/:videoId" component={ VideoShowContainer } />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/upload" component={VideoFormContainer} />
      <ProtectedVideoRoute exact path="/upload/:videoId/edit" component={VideoFormContainer} />
      <Route path="/" render={() => <Redirect to="/" />} />
    </Switch>
  </div>
);

export default withRouter(App);
