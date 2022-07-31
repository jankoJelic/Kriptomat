import appStyles from 'constants/appStyles';
import Coin from 'types/Coin';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Divider from 'components/UI/Divider';
import getCurrency from 'services/getCurrency';
import useMyNavigation from 'hooks/useMyNavigation';
import CurrencyImage from 'components/images/CurrencyImage';
import coinPriceToLocaleString from 'util/numbers/coinPriceToLocaleString';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {addCoinDetails} from 'store/dataSlice';
import PriceChangeIndicator from 'containers/PriceChangeIndicator';
import {setIsLoading} from 'store/appSlice';
import {CURRENCY_SYMBOL} from 'constants/currency';
import {
  setCurrencyInfo,
  setCurrencyScreenMode,
} from 'store/currencyOverviewSlice';

interface Props {
  item: Coin;
}

const CoinListItem: React.FC<Props> = ({item}) => {
  const {width} = useWindowDimensions();
  const navigation = useMyNavigation();
  const coinsDetails = useAppSelector(state => state.dataSlice.coinsDetails);
  const dispatch = useAppDispatch();

  const last24HoursChange = item.market_cap_change_percentage_24h;

  const CoinInfo = () => (
    <View style={styles.row}>
      <CurrencyImage uri={item.image} />
      <View style={{maxWidth: width / 2.2}}>
        <Text numberOfLines={1} style={styles.nameText}>
          {item.name}
        </Text>
        <Text style={{fontFamily: appStyles.fonts.thin}}>
          {item.symbol.toUpperCase()}
        </Text>
      </View>
    </View>
  );

  const CoinPrice = () => (
    <View style={styles.priceContainer}>
      <Text style={styles.priceText}>
        {CURRENCY_SYMBOL + coinPriceToLocaleString(item.current_price)}
      </Text>
      <PriceChangeIndicator value={last24HoursChange} />
    </View>
  );

  const handleOnPressCurrency = async () => {
    dispatch(setIsLoading(true));
    const existingCoin = coinsDetails.find(coin => coin.id === item.id);

    if (!!existingCoin) {
      dispatch(setCurrencyInfo(existingCoin));
    } else {
      await fetchAndSetNewCurrencyData();
    }
    dispatch(setCurrencyScreenMode('view'));
    navigation.navigate('Currency');

    dispatch(setIsLoading(false));
  };

  const fetchAndSetNewCurrencyData = async () => {
    const res = await getCurrency(item.id);

    if (res.status === 200) {
      dispatch(setCurrencyInfo(res.data));
      dispatch(addCoinDetails(res.data));
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPressCurrency}>
      <CoinInfo />
      <CoinPrice />
      <Divider />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  nameText: {
    fontFamily: appStyles.fonts.semiBold,
    color: appStyles.colors.textMain,
    fontSize: 14,
  },
  priceText: {
    fontFamily: appStyles.fonts.semiBold,
    color: appStyles.colors.textMain,
  },
  priceContainer: {alignItems: 'flex-end'},
  row: {flexDirection: 'row', alignItems: 'center'},
});

export default CoinListItem;
