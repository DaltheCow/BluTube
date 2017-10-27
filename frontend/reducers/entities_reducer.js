import { combineReducers } from 'redux';
import VideosReducer from './errors_reducer';

export default combineReducers({
  videos: VideosReducer
});
