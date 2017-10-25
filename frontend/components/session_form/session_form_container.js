import { connect } from 'react-redux';
import SessionForm from './session_form';
import { sendErrors, login, signup, verifyUsername, clearErrors } from '../../actions/session_actions';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
