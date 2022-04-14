
import {ActionTypes} from '../ActionTypes';

interface IUpdateOrderBook {
  symbol:string,
  channel:string,
  data:{
    bids:any[];
    asks:any[];
  };
}

export const updateOrderBook = ({
  symbol,
  channel,
  data
}:IUpdateOrderBook) => ({
  type: ActionTypes.UPDATE_DATA,
  id:`${channel}-${symbol}`,
  data,
});
