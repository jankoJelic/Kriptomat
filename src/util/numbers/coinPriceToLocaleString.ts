const coinPriceToLocaleString = (x: number | string) =>
  x > 1 ? Number(x).toLocaleString('en-US') : x;

export default coinPriceToLocaleString;
