import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import SearchReducer from './search_reducer';
import UIReducer from './ui_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer,
  search: SearchReducer,
  ui: UIReducer,
});
