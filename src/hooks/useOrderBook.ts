import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderBook } from "../data/store/orderBook/actions";
import { IStore } from "../models";
import { getSubscriptionRequest } from "../utils";

export const useOrderBook = (url: string) => {
  const [channel, setChannel] = useState<string>("book");
  const [symbol, setSymbol] = useState<string>("tBTCUSD");

  const id = `${channel}-${symbol}`;
  const info = useSelector((store: IStore) => store.orderBook[id]);
  const dispatch = useDispatch();
  let BOOK: any = { bids: {}, asks: {} };
  useEffect(() => {
    let isMounted = true;
    let connected = false;
    const ws = new WebSocket(url);
    const addSubscription = () => {
      if (isMounted && !connected) {
        ws.onopen = () => {
          connected = true;
          BOOK.bids = {};
          BOOK.asks = {};
          BOOK.psnap = {};
          BOOK.mcnt = 0;
          ws.send(JSON.stringify(getSubscriptionRequest({ channel, symbol })));
        };
        ws.onmessage = (event) => {
          let data = JSON.parse(event.data);
          if (data.event) return;
          try {
            const [channelId, items] = data;
            if (items.length == 25) {
              items.forEach((pp: any) => {
                const [id, price, amount] = pp;
                const side = amount >= 0 ? "bids" : "asks";
                BOOK[side][id] = pp;
              });
            } else if (items.length == 3) {
              const pp = items;
              const [id, price, amount] = pp;
              if (!price) {
                let found = true;
                if (amount > 0) {
                  if (BOOK["bids"][id]) {
                    delete BOOK["bids"][id];
                  } else {
                    found = false;
                  }
                } else if (amount < 0) {
                  if (BOOK["asks"][pp.id]) {
                    delete BOOK["asks"][pp.id];
                  } else {
                    found = false;
                  }
                }
              } else {
                const side = amount >= 0 ? "bids" : "asks";
                BOOK[side][id] = pp;
              }
            } else {
              console.log(data);
            }
          } catch (error) {}
        };
        ws.onerror = () => {
          /*
           Do add error handler.
          */
        };
        ws.onclose = () => {
          connected = false;
        };
      }
    };
    addSubscription();
    return () => {
      isMounted = false;
      connected && ws.close();
    };
  }, [url, symbol, channel]);

  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      if (isMounted) {
        const compareItem = (a: any, b: any) => {
          return parseFloat(b[0]) - parseFloat(a[0]);
        };
        const bids = Object.values(BOOK.bids).sort(compareItem);
        const asks = Object.values(BOOK.asks).sort(compareItem);
        dispatch(
          updateOrderBook({
            data: {
              bids,
              asks,
            },
            symbol,
            channel,
          })
        );
      }
    }, 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [symbol, channel]);

  return {
    info: {
      bids: info?.bids || [],
      asks: info?.asks || [],
    },
    channel,
    symbol,
  };
};
