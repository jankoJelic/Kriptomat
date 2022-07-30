import SearchBar from 'components/SearchBar';
import SortIcon from 'components/SortIcon';
import appStyles from 'constants/appStyles';
import CoinListItem from 'containers/CoinsList/CoinListItem';
import Coin from 'models/Coin';
import React, {useEffect, useState} from 'react';
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
import sortByProperty from 'util/arrays/sortByProperty';

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
  const CONTENT_WIDTH = width * 0.9;

  const [data, setData] = useState<Coin[]>([]);
  const [sorted, setSorted] = useState({
    by: '',
    ascending: false,
  });

  const fetchData = async () => {
    const response = await getCurrencies();

    if (response.status === 200) {
      dispatch(storeCoins(response.data));
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortData = ({
    ascending,
    property,
  }: {
    ascending: boolean;
    property: string;
  }) => {
    setData(
      sortByProperty({
        array: data.slice(),
        property,
        ascending,
      }),
    );
    setSorted({by: property, ascending});
  };

  const sortBy = (property: string) => {
    if (sorted.by === property && sorted.ascending === true) {
      sortData({ascending: false, property});
    } else {
      sortData({ascending: true, property});
    }
  };

  const handleSearch = (txt: string) => {
    if (txt === '') {
      setData(coins);
      return;
    }

    setData(
      coins.filter((coin: Coin) =>
        (coin.name + coin.symbol).toLowerCase().includes(txt.toLowerCase()),
      ),
    );
  };

  const renderItem = ({item}: {item: Coin}) => <CoinListItem item={item} />;

  return (
    <View style={{width: CONTENT_WIDTH}}>
      <SearchBar onChange={handleSearch} />
      <View style={styles.headerContainer}>
        <HeaderTitle text="Coin" onPress={() => sortBy('name')} />
        <HeaderTitle text="Price" onPress={() => sortBy('current_price')} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
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

export default CoinsList;
