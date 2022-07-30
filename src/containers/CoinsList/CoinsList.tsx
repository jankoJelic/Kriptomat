import SearchBar from 'components/SearchBar';
import SortIcon from 'components/SortIcon';
import appStyles from 'constants/appStyles';
import CoinListItem from 'containers/CoinsList/CoinListItem';
import Coin from 'models/Coin';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import getCurrencies from 'services/getCurrencies';
import {storeCoins} from 'store/dataSlice';
import {useAppDispatch, useAppSelector} from 'store/hooks';

interface TitleProps {
  text: string;
  onPress: () => void;
}

const HeaderTitle: React.FC<TitleProps> = ({text, onPress}) => (
  <TouchableOpacity style={{flexDirection: 'row'}} onPress={onPress}>
    <Text style={styles.headerTitle}>{text}</Text>
    <SortIcon />
  </TouchableOpacity>
);

const CoinsList: React.FC = () => {
  const coins = useAppSelector(state => state.dataSlice.coins);
  const dispatch = useAppDispatch();
  const {width} = useWindowDimensions();

  const [data, setData] = useState<Coin[]>(coins);
  const [searchInput, setSearchInput] = useState('');

  const fetchData = async () => {
    const response = await getCurrencies();

    if (response.status === 200) dispatch(storeCoins(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}: {item: Coin}) => <CoinListItem item={item} />;

  const sortByCoinName = useCallback(() => {}, []);
  const sortByPrice = useCallback(() => {}, []);

  return (
    <>
      <SearchBar onChange={txt => setSearchInput(txt)} />
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{width: width * 0.9}}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <HeaderTitle text="Coin" onPress={sortByCoinName} />
            <HeaderTitle text="Price" onPress={sortByPrice} />
          </View>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingTop: 18,
  },
  headerTitle: {fontFamily: appStyles.fonts.regular, marginRight: 4},
});

export default React.memo(CoinsList);
