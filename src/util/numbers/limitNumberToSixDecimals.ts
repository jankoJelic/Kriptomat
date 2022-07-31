import coinPriceToLocaleString from "./coinPriceToLocaleString";
import countDecimals from "./countDecimalPlaces";

const limitNumberToSixDecimals = (value: number) => {
  const decimalNumbers = countDecimals(value);
  return decimalNumbers > 6
    ? coinPriceToLocaleString(value.toFixed(6))
    : coinPriceToLocaleString(value);
};

export default limitNumberToSixDecimals;
