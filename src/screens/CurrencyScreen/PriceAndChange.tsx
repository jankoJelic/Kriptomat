import appStyles from 'constants/appStyles';
import {CURRENCY_SYMBOL} from 'constants/currency';
import PriceChangeIndicator from 'containers/PriceChangeIndicator';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from 'store/hooks';
import coinPriceToLocaleString from 'util/numbers/coinPriceToLocaleString';
import getCurrencyInfoByInterval from './getCurrencyInfoByInterval';

const PriceAndChange = () => {
  const {
    currencyInfo: {
      market_data: {current_price},
    },
  } = useAppSelector(state => state.currencyOverviewSlice);

  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>
        {CURRENCY_SYMBOL + coinPriceToLocaleString(current_price.eur)}
      </Text>
      <PriceChangeIndicator
        pastelColors
        value={getCurrencyInfoByInterval().priceChangePercentage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: appStyles.fonts.semiBold,
    fontSize: 28,
    color: appStyles.colors.textMain,
  },
});

export default PriceAndChange;
