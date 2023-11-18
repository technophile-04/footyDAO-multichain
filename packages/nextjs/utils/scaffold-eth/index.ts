export * from "./fetchPriceFromUniswap";
export * from "./networks";
export * from "./notification";
export * from "./block";
export * from "./decodeTxData";

export const changeUnixTimeStamptoDate = (unixTimeStamp: string) => {
  const date = new Date(parseInt(unixTimeStamp) * 1000);
  return date.toLocaleString();
};

export const changeUnixTimeStamptoTime = (unixTimeStamp: string) => {
  const date = new Date(parseInt(unixTimeStamp) * 1000);
  return date.toLocaleTimeString();
};
