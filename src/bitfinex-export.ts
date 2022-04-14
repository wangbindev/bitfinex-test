interface IEnv {
  SOCKET_URL: string;
}

export const ENV: IEnv = {
  SOCKET_URL: 'wss://api-pub.bitfinex.com/ws/2',
};
