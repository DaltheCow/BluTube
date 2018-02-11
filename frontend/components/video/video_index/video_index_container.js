import { connect } from 'react-redux';
import { fetchVideos } from '../../../actions/video_actions';
import { clearFilter } from '../../../actions/ui_actions';
import { resetSidebarState } from '../../../actions/side_bar_actions';
import VideoIndex from './video_index';

//user needs access to all of their video ids
const mapStateToProps = (state, ownProps) => {
  const filter = state.ui.filter;
  let videos = Object.values(state.entities.videos);

  if (filter.length > 0) {
    videos = Object.values(state.entities.videos).sort((b, a) =>
      (parseInt(a[filter]) - parseInt(b[filter]))
    );
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
    resetSidebarState: (component) => dispatch(resetSidebarState(component)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
