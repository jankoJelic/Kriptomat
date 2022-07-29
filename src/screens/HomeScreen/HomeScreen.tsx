import useAbortEffect from 'hooks/useAbortEffect';
import Coin from 'models/Coin';
import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import getCurrencies from 'services/getCurrencies';
import KriptomatHeader from 'assets/images/kriptomatHeader.svg';
import SearchBar from 'components/SearchBar';

const HomeScreen = () => {
  const {width, height} = useWindowDimensions();
  const [data, setData] = useState<Coin[]>([]);

  useAbortEffect(async () => {
    const response = await getCurrencies();

    if (response.status === 200) {
      setData(response.data);
    }
  });

  return (
    <View style={{alignItems: 'center', paddingTop: 20, paddingHorizontal: 10}}>
      <KriptomatHeader width="45%" height={50} />
      <SearchBar />
    </View>
  );
};

export default HomeScreen;
