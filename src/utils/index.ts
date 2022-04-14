interface IRequest {
  channel: string;
  symbol: string;
}
export const getSubscriptionRequest = ({ channel, symbol }: IRequest) => ({
  event: "subscribe",
  channel,
  symbol,
});
