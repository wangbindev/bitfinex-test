import {combineReducers} from 'redux';
import {OrderBookReducer} from './orderBook/reducer';

export default combineReducers({
  orderBook: OrderBookReducer,
});
