import store from 'store';
import {addCurrencyDisplayInfos} from 'store/currencyOverviewSlice';

const getCurrencyInfoByInterval = () => {
  const state = store.getState();

  const {pricesData, activeFilter, currencyInfo} = state.currencyOverviewSlice;

  const {id} = currencyInfo;

  const storedPrices = pricesData.find(
    p => p.currencyId === id && p.filterId === activeFilter.id,
  )?.prices;

  if (!!storedPrices) {
    const minValue = Math.min(...storedPrices);
    const maxValue = Math.max(...storedPrices);
    const currentPrice = storedPrices[storedPrices.length - 1];
    const firstPriceInInterval = storedPrices[0];

    const percentageChange =
      ((currentPrice - firstPriceInInterval) / firstPriceInInterval) * 100;

    const data = {
      id,
      intervalId: activeFilter.id,
      low: minValue,
      high: maxValue,
      priceChangePercentage: percentageChange,
    };

    return data;
  } else {
    return emptyData;
  }
};

export default getCurrencyInfoByInterval;

const emptyData = {
  low: '',
  high: '',
  priceChangePercentage: '',
};
