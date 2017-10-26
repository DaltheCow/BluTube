import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';
import { sendErrors, login, signup, verifyUsername, clearErrors } from '../../actions/session_actions';

//used in clearErrors to clear errors by dispatching receiveCurrentUser with the currentUser
let currentUser;

const mapStateToProps = (state, ownProps) => {
  currentUser = state.session.currentUser;
  return {
    formType: ownProps.match.path,
    errors: state.errors.session,
    currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submitAction = ownProps.match.path === '/login' ? login : signup;
  return {
    submitAction: (user) => dispatch(submitAction(user)),
    sendErrors: (errors) => dispatch(sendErrors(errors)),
    verifyUsername: (username) => dispatch(verifyUsername(username)),
    clearErrors: () => dispatch(clearErrors(currentUser))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
