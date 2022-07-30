import appStyles from 'constants/appStyles';
import Coin from 'models/Coin';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Divider from 'components/Divider';
import getCurrency from 'services/getCurrency';
import useMyNavigation from 'hooks/useMyNavigation';
import CurrencyImage from 'components/images/CurrencyImage';
import Icon from 'react-native-vector-icons/Entypo';
import coinPriceToLocaleString from 'util/numbers/coinPriceToLocaleString';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import CoinDetails from 'models/CoinDetails';
import {addCoinDetails} from 'store/dataSlice';

interface Props {
  item: Coin;
}

const CoinListItem: React.FC<Props> = ({item}) => {
  const {width} = useWindowDimensions();
  const navigation = useMyNavigation();
  const coinsDetails = useAppSelector(state => state.dataSlice.coinsDetails);
  const dispatch = useAppDispatch();

  const last24HoursChange = item.market_cap_change_percentage_24h;
  const negativeChange = last24HoursChange < 0;
  const changeColor = negativeChange
    ? appStyles.colors.redNegative
    : appStyles.colors.greenPositive;

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
        €{coinPriceToLocaleString(item.current_price)}
      </Text>
      <View style={styles.row}>
        <Icon
          name={negativeChange ? 'triangle-down' : 'triangle-up'}
          size={18}
          color={
            negativeChange
              ? appStyles.colors.redNegative
              : appStyles.colors.greenPositive
          }
          style={{top: 1}}
        />

        <Text
          style={{
            fontFamily: appStyles.fonts.regular,
            color: changeColor,
          }}>
          {last24HoursChange.toFixed(2)}%
        </Text>
      </View>
    </View>
  );

  const handleOnPressCurrency = async () => {
    const existingCoin = coinsDetails.find(coin => coin.id === item.id);

    if (!!existingCoin) {
      goToCurrencyScreen(existingCoin);
      return;
    }

    const response = await getCurrency(item.id);

    if (response.status === 200) {
      goToCurrencyScreen(response.data);
      dispatch(addCoinDetails(response.data));
    }
  };

  const goToCurrencyScreen = (coinDetails: CoinDetails) => {
    navigation.navigate('Currency', {coinDetails});
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
  row: {flexDirection: 'row'},
});

export default CoinListItem;
