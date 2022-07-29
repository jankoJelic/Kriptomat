import useAbortEffect from 'hooks/useAbortEffect';
import Coin from 'models/Coin';
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import getCurrencies from 'services/getCurrencies';
import KriptomatHeader from 'assets/images/kriptomatHeader.svg';
import SearchBar from 'components/SearchBar';

const HomeScreen = () => {
  const [data, setData] = useState<Coin[]>([]);
  const [searchInput, setSearchInput] = useState('');

  useAbortEffect(async () => {
    const response = await getCurrencies();

    if (response.status === 200) {
      setData(response.data);
    }
  });

  const renderItem = ({item}: {item: Coin}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image source={{uri: item.image}} style={{width: 32, aspectRatio: 1}} />
        <View>
          <Text style={{fontFamily: 'Montserrat-Thin'}}>{item.name}</Text>
          <Text>{item.symbol}</Text>
        </View>
        <View></View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{alignItems: 'center', paddingTop: 20, paddingHorizontal: 10}}>
      <KriptomatHeader width="45%" height={50} />
      <SearchBar onChange={txt => setSearchInput(txt)} />
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={<View></View>}
      />
    </View>
  );
};

export default HomeScreen;
