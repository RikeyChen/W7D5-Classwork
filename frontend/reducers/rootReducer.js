import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});
