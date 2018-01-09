import { combineReducers } from 'redux';
import FilterReducer from './filter_reducer';
import SideBarReducer from './side_bar_reducer';


export default combineReducers({
  filter: FilterReducer,
  sidebar: SideBarReducer,
});
