import { combineReducers } from 'redux';
import VideosReducer from './videos_reducer';

export default combineReducers({
  videos: VideosReducer
});
