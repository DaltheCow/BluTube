import { combineReducers } from 'redux';
import VideosReducer from './videos_reducer';
import UsersReducer from './users_reducer';
import CommentsReducer from './comments_reducer';
import SubscriptionReducer from './subscription_reducer'

export default combineReducers({
  videos: VideosReducer,
  users: UsersReducer,
  comments: CommentsReducer,
  subscriptions: SubscriptionReducer,
});
