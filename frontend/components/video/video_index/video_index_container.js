import { connect } from 'react-redux';
import { fetchVideos } from '../../../actions/video_actions';
import { clearFilter } from '../../../actions/ui_actions';
import { componentMount } from '../../../actions/side_bar_actions';
import VideoIndex from './video_index';
import shuffle from '../../../util/shuffle';

//user needs access to all of their video ids
const mapStateToProps = (state, ownProps) => {
  const filter = state.ui.filter;
  let videos = Object.values(state.entities.videos);

  if (filter.length > 0) {
    videos = Object.values(state.entities.videos).sort((b, a) => {
      if (parseInt(a[filter]) === parseInt(b[filter])) return 0;
      if (parseInt(a[filter]) < parseInt(b[filter])) return -1;
      return 1;
    });
  }

  return {
    videos,
    filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    clearFilter: () => dispatch(clearFilter()),
    componentMount: (component) => dispatch(componentMount(component)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
