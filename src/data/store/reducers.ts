import {combineReducers} from 'redux';
import {DataReducer} from './data/reducer';

export default combineReducers({
  data: DataReducer,
});
