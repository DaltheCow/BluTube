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

const ProtectedVideo = ({ component: Component, path, ownVideo }) => (
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
  const id = ownProps.match.params.videoId;
  {ownVideo: state.session.currentUser.id === state.entities.videos[id].author_id}
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

export const ProtectedVideoRoute = withRouter(connect(mapStateToProps2, null)(ProtectedVideo));
