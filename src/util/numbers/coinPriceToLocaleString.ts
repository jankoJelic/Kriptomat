const coinPriceToLocaleString = (x: number) =>
  x > 1 ? Number(x).toLocaleString('en-US') : x;

export default coinPriceToLocaleString;
