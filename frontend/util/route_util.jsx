import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const ProtectedVideo = ({ component: Component, path, ownVideo, loggedIn }) => (
  <Route path={path} render={(props) => (
     ownVideo ? (
      <Component {...props} />
    ) : (
      <Redirect to={`/videos/${props.match.params.videoId}`} />
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

const mapStateToProps2 = (state, ownProps) => {
  const id = parseInt(ownProps.location.pathname.slice(8));

  return {ownVideo: Boolean(state.session.currentUser) && state.session.currentUser.videoIds.includes(id)}
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

export const ProtectedVideoRoute = withRouter(connect(mapStateToProps2, null)(ProtectedVideo));
