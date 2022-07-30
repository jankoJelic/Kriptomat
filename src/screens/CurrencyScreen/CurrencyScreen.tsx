import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CurrencyImage from 'components/images/CurrencyImage';
import NavTitle from 'components/text/NavTitle';
import RootStackParamList from 'models/RootStackParams';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import appStyles from 'constants/appStyles';
import coinPriceToLocaleString from 'util/numbers/coinPriceToLocaleString';
import HeaderBackArrow from 'components/icons/HeaderBackArrow';

type Props = NativeStackScreenProps<RootStackParamList, 'Currency'>;

const CurrencyScreen = ({navigation, route}: Props) => {
  const {
    coinDetails: {
      name,
      image,
      market_data: {
        current_price,
        high_24h,
        low_24h,
        price_change_percentage_24h,
      },
    },
  } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <HeaderBackArrow />
          <CurrencyImage uri={image.small} />
          <NavTitle text={name} />
        </View>
      ),
      headerRight: () => (
        <Icon name="search" color={appStyles.colors.textMain} size={24} />
      ),
    });
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appStyles.colors.backgroundMain,
        padding: 12,
        paddingTop: 18,
        flexDirection: 'row',
      }}>
      <>
        <Text
          style={{
            fontFamily: appStyles.fonts.semiBold,
            fontSize: 28,
            color: appStyles.colors.textMain,
          }}>
          € {coinPriceToLocaleString(current_price.eur)}
        </Text>
      </>
      <View style={{borderRadius: 10, padding: 6}}>
        <Text>{price_change_percentage_24h}</Text>
      </View>
    </View>
  );
};

export default CurrencyScreen;
