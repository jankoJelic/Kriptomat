import React from 'react';
import {View} from 'react-native';
import KriptomatBanner from 'assets/images/kriptomatBanner.svg';
import CoinsList from 'containers/CoinsList';

const HomeScreen = () => {
  return (
    <View style={{alignItems: 'center', paddingTop: 20, paddingHorizontal: 10}}>
      <KriptomatBanner width="45%" height={50} />
      <CoinsList />
    </View>
  );
};

export default HomeScreen;
