import { connect } from 'react-redux';
import SessionForm from './session_form';
import { sendErrors, login, signup, verifyUsername, receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: ownProps.match.path,
    errors: state.errors.session,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submitAction = ownProps.match.path === '/login' ? login : signup;
  return {
    submitAction: (user) => dispatch(submitAction(user)),
    sendErrors: (errors) => dispatch(sendErrors(errors)),
    verifyUsername: (username) => dispatch(verifyUsername(username)),
    receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
