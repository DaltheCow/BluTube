import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './home';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
