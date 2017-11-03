import { connect } from 'react-redux';
import { fetchVideos } from '../../../actions/video_actions';
import { receiveFilter, clearFilter } from '../../../actions/ui_actions';
import VideoIndex from './video_index';
import shuffle from '../../../util/shuffle';

//user needs access to all of their video ids
const mapStateToProps = (state, ownProps) => {
  const filter = state.ui.filter;
  let videos = shuffle(Object.values(state.entities.videos));
  if (filter.length > 0) {
    videos = Object.values(state.entities.videos).sort((b, a) => {
      debugger
      if (parseInt(a[filter]) === parseInt(b[filter])) return 0;
      if (parseInt(a[filter]) < parseInt(b[filter])) return -1;
      return 1;
    });
  }

  return {
    videos: videos.slice(0, 40),
    filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    receiveFilter: (filter) => dispatch(receiveFilter(filter)),
    clearFilter: () => dispatch(clearFilter()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
