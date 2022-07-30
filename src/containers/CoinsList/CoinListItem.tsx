import appStyles from 'constants/appStyles';
import Coin from 'models/Coin';
import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native';
import Divider from 'components/Divider';
import Triangle from 'components/Triangle';

interface Props {
  item: Coin;
}

const CoinListItem: React.FC<Props> = ({item}) => {
  const last24HoursChange = item.market_cap_change_percentage_24h;
  const negativeChange = last24HoursChange < 0;
  const changeColor = negativeChange
    ? appStyles.colors.redNegative
    : appStyles.colors.greenPositive;

  const CoinInfo = () => (
    <View style={styles.row}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={{maxWidth: 130}}>
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
      <Text style={styles.priceText}>€{item.current_price}</Text>
      <View style={styles.row}>
        <Triangle
          color={changeColor}
          direction={negativeChange ? 'down' : 'up'}
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

  return (
    <TouchableOpacity style={styles.container}>
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
  image: {width: 32, aspectRatio: 1, marginRight: 10},
  nameText: {
    fontFamily: appStyles.fonts.semiBold,
    color: appStyles.colors.textMain,
    fontSize: 14,
  },
  priceText: {
    fontFamily: appStyles.fonts.semiBold,
    color: appStyles.colors.textMain,
  },
  priceContainer: {width: 200, alignItems: 'flex-end'},
  row: {flexDirection: 'row'},
});

export default CoinListItem;
