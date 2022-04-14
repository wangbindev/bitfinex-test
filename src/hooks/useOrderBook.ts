import { useEffect, useState } from "react";
import { getChannelSubscriptionRequest } from "../utils";

export const useOrderBook = (url: string) => {
  const [info, setOrderBook] = useState<any>({ bids: [], asks: [] });

  useEffect(() => {
    let isMounted = true;
    let connected = false;
    let BOOK: any = {};
    const ws = new WebSocket(url);
    const addSubscription = () => {
      if (isMounted && !connected) {
        ws.onopen = () => {
          console.log("[onopen]");
          connected = true;
          BOOK.bids = {};
          BOOK.asks = {};
          BOOK.psnap = {};
          BOOK.mcnt = 0;
          ws.send(JSON.stringify(getChannelSubscriptionRequest("")));
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
            const compareItem = (a: any, b: any) => {
              return   parseFloat(b[0])-parseFloat(a[0]);
            };
            const bids = Object.values(BOOK.bids).sort(compareItem);
            const asks = Object.values(BOOK.asks).sort(compareItem);
            setOrderBook({ bids, asks });
          } catch (error) {
            console.log("try-catch", error);
          }
        };
        ws.onerror = () => {
          /*
           Do add error handler.
          */
        };
        ws.onclose = () => {
          console.log("[onclose]");
          connected = false;
        };
      }
    };
    addSubscription();
    return () => {
      isMounted = false;
      connected && ws.close();
    };
  }, [url]);

  return {
    info,
  };
};
