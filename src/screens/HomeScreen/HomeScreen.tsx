import useAbortEffect from 'hooks/useAbortEffect';
import Coin from 'models/Coin';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import getCurrencies from 'services/getCurrencies';
import KriptomatHeader from 'assets/images/kriptomatHeader.svg';
import SearchBar from 'components/SearchBar';
import CoinsList from './CoinsList';

const HomeScreen = () => {
  const {width} = useWindowDimensions();
  const [data, setData] = useState<Coin[]>([]);
  const [searchInput, setSearchInput] = useState('');

  useAbortEffect(async () => {
    const response = await getCurrencies();

    if (response.status === 200) {
      setData(response.data);
    }
  });

  const sortByCoinName = () => {}
  const sortByPrice = () => {}

  return (
    <View style={{alignItems: 'center', paddingTop: 20, paddingHorizontal: 10}}>
      <KriptomatHeader width="45%" height={50} />
      <SearchBar onChange={txt => setSearchInput(txt)} />
      <CoinsList data={data} onPressSortByCoin={sortByCoinName} sortByPrice={sortByPrice} />
    </View>
  );
};

export default HomeScreen;
