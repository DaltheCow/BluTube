import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.path;
  return {
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const submitAction = ownProps.match.path === '/login' ? login : signup;
  return {
    submitAction: (user) => dispatch(submitAction(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
