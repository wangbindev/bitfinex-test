import {ActionTypes} from '../ActionTypes';
import Immutable from 'seamless-immutable';
import {AnyAction} from 'redux';

const INITIAL_STATE = Immutable({

});

export const DataReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};
