export const getChannelSubscriptionRequest = (channel: string) => ({
    event: 'subscribe',
    channel: 'book',
    symbol: 'tBTCUSD',
  });
