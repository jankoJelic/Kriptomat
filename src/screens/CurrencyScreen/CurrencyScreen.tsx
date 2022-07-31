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

type Props = NativeStackScreenProps<RootStackParamList, 'Currency'>;

const CurrencyScreen = ({navigation, route}: Props) => {
  const {
    coinDetails: {
      id,
      name,
      image,
      market_data: {
        current_price,
        high_24h,
        low_24h,
        price_change_percentage_24h,
        // price_change_percentage_7d,
        // price_change_percentage_30d,
        // price_change_percentage_1y,
        // market_cap,
        // total_volume,
      },
    },
  } = route.params;

  useEffect(() => {
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
  }, []);

  const PriceAndChange = () => (
    <View style={styles.topView}>
      <Text style={styles.priceText}>
        {CURRENCY_SYMBOL + coinPriceToLocaleString(current_price.eur)}
      </Text>
      <PriceChangeIndicator pastelColors value={price_change_percentage_24h} />
    </View>
  );

  const LowHighText = ({title = '', value = 0}) => (
    <Text style={{fontFamily: appStyles.fonts.regular, marginRight: 20}}>
      {title + ' ' + CURRENCY_SYMBOL + ' '}
      <Text style={{fontFamily: appStyles.fonts.semiBold}}>
        {coinPriceToLocaleString(value)}
      </Text>
    </Text>
  );

  const LowHighTexts = () => (
    <View style={{marginTop: 10, flexDirection: 'row'}}>
      <LowHighText title="24h Low" value={low_24h.eur} />
      <LowHighText title="24h High" value={high_24h.eur} />
    </View>
  );

  return (
    <ScrollView style={styles.screen}>
      <PriceAndChange />
      <LowHighTexts />
      <CurrencyLineChart currencyId={id} />
      <MainButton text={`Buy, Sell or Exchange ${name}`} />
      <Text style={styles.overviewText}>Overview</Text>
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
