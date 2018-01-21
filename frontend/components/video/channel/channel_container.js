import { connect } from 'react-redux';
import Channel from './channel';
import mapFilter from '../../../util/mapFilter';


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.userId;
  const channel = state.entities.users[id];
  if (!channel) {
    return { channel: null};
  }
  const videos = mapFilter(channel.videoIds, id => state.entities.videos[id]);

  return {
    channel,
    videos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  null,
  null
)(Channel);
