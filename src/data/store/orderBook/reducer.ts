import {ActionTypes} from '../ActionTypes';
import Immutable from 'seamless-immutable';
import {AnyAction} from 'redux';

const INITIAL_STATE = Immutable({

});

export const OrderBookReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA:
      return {
        ...state,
        [action.id]:action.data
      };
    default:
      return state;
  }
};
