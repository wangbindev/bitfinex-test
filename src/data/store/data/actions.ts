
import {ActionTypes} from '../ActionTypes';

export const updateData = (data: []) => ({
  type: ActionTypes.UPDATE_DATA,
  data,
});
