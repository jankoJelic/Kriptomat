import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CurrencyImage from 'components/images/CurrencyImage';
import NavTitle from 'components/text/NavTitle';
import RootStackParamList from 'types/RootStackParams';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import appStyles from 'constants/appStyles';
import coinPriceToLocaleString from 'util/numbers/coinPriceToLocaleString';
import HeaderBackArrow from 'components/icons/HeaderBackArrow';
import PriceChangeIndicator from 'containers/PriceChangeIndicator';
import CurrencyLineChart from 'components/charts/CurrencyLineChart';
import {CURRENCY_SYMBOL} from 'constants/currency';
import MainButton from 'components/buttons/MainButton';
import {useAppSelector} from 'store/hooks';
import OverviewTable from './OverviewTable';
import countDecimals from 'util/numbers/countDecimalPlaces';

type Props = NativeStackScreenProps<RootStackParamList, 'Currency'>;

const CurrencyScreen = ({navigation, route}: Props) => {
  const {
    coinDetails: {
      id,
      name,
      image,
      symbol,
      market_data: {
        current_price,
        high_24h,
        low_24h,
        price_change_percentage_24h,
        price_change_percentage_7d,
        price_change_percentage_30d,
        price_change_percentage_1y,
        market_cap,
        total_volume,
      },
    },
  } = route.params;

  const activeFilter = useAppSelector(
    state => state.currencyOverviewSlice.activeFilter,
  );
  const prices = useAppSelector(state => state.currencyOverviewSlice.data);

  useEffect(() => {
    setHeaderOptions();
  }, []);

  const setHeaderOptions = () => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.row}>
          <HeaderBackArrow />
          <CurrencyImage uri={image.small} />
          <NavTitle text={name} />
        </View>
      ),
      headerRight: () => (
        <Icon name="search" color={appStyles.colors.textMain} size={24} />
      ),
    });
  };

  const PriceAndChange = () => (
    <View style={styles.topView}>
      <Text style={styles.priceText}>
        {CURRENCY_SYMBOL + coinPriceToLocaleString(current_price.eur)}
      </Text>
      <PriceChangeIndicator
        pastelColors
        value={getCurrencyInfoByInterval().priceChangePercentage}
      />
    </View>
  );

  const LowHighText = ({
    title = '',
    value = 0,
  }: {
    title: string;
    value: number | string;
  }) => {
    const outputValue = () => {
      if (typeof value === 'number') {
        const decimalNumbers = countDecimals(value);
        return decimalNumbers > 5
          ? coinPriceToLocaleString(value.toFixed(5))
          : coinPriceToLocaleString(value);
      } else {
        return value;
      }
    };

    return (
      <Text style={{fontFamily: appStyles.fonts.regular, marginRight: 20}}>
        {title + ' ' + CURRENCY_SYMBOL + ' '}
        <Text style={{fontFamily: appStyles.fonts.semiBold}}>
          {outputValue()}
        </Text>
      </Text>
    );
  };

  const LowHighTexts = () => (
    <View style={{marginTop: 10, flexDirection: 'row'}}>
      <LowHighText
        title={`${activeFilter.title} Low`}
        value={getCurrencyInfoByInterval().low}
      />
      <LowHighText
        title={`${activeFilter.title} High`}
        value={getCurrencyInfoByInterval().high}
      />
    </View>
  );

  const getCurrencyInfoByInterval = () => {
    const getStoredPrices = prices.find(
      p => p.currencyId === id && p.filterId === activeFilter.id,
    )?.prices;

    if (!!getStoredPrices) {
      const minValue = Math.min(...getStoredPrices);
      const maxValue = Math.max(...getStoredPrices);

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
          return {
            low: '',
            high: '',
            priceChangePercentage: '',
          };
      }
    } else {
      return {
        low: '',
        high: '',
        priceChangePercentage: '',
      };
    }
  };

  return (
    <ScrollView style={styles.screen}>
      <PriceAndChange />
      <LowHighTexts />
      <CurrencyLineChart currencyId={id} />
      <MainButton text={`Buy, Sell or Exchange ${name}`} />
      <Text style={styles.overviewText}>Overview</Text>
      <OverviewTable
        firstCellTitle="Volume(1d):"
        firstCellValue={
          CURRENCY_SYMBOL + coinPriceToLocaleString(total_volume.eur)
        }
        secondCellTitle="Market cap:"
        secondCellValue={
          CURRENCY_SYMBOL + coinPriceToLocaleString(market_cap.eur)
        }
        thirdCellTitle="Circulating supply:"
        thirdCellValue={
          coinPriceToLocaleString(total_volume.eur) + ' ' + symbol.toUpperCase()
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: appStyles.colors.white,
    padding: 12,
    paddingTop: 18,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: appStyles.fonts.semiBold,
    fontSize: 28,
    color: appStyles.colors.textMain,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overviewText: {
    fontFamily: appStyles.fonts.semiBold,
    fontSize: 20,
    marginTop: 30,
  },
});

export default CurrencyScreen;
