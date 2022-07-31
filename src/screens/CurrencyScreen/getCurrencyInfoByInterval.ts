import store from 'store';

const getCurrencyInfoByInterval = () => {
  const state = store.getState();

  const {pricesData, activeFilter, currencyInfo} = state.currencyOverviewSlice;

  const {
    id,
    market_data: {
      low_24h,
      high_24h,
      price_change_percentage_1y,
      price_change_percentage_30d,
      price_change_percentage_24h,
      price_change_percentage_7d,
    },
  } = currencyInfo;

  const storedPrices = pricesData.find(
    p => p.currencyId === id && p.filterId === activeFilter.id,
  )?.prices;

  if (!!storedPrices) {
    const minValue = Math.min(...storedPrices);
    const maxValue = Math.max(...storedPrices);

    const percentageChange = (maxValue / minValue) * 100;

    switch (activeFilter.id) {
      case 1:
        return {
          low: low_24h.eur,
          high: high_24h.eur,
          priceChangePercentage: price_change_percentage_24h,
        };
      case 2:
        return {
          low: minValue,
          high: maxValue,
          priceChangePercentage: price_change_percentage_7d,
        };
      case 3:
        return {
          low: minValue,
          high: maxValue,
          priceChangePercentage: price_change_percentage_30d,
        };
      case 4:
        return {
          low: minValue,
          high: maxValue,
          priceChangePercentage: price_change_percentage_1y,
        };
      case 5:
        return {
          low: minValue,
          high: maxValue,
          priceChangePercentage: percentageChange,
        };
      default:
        return emptyData;
    }
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
