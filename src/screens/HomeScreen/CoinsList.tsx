import SortIcon from 'components/SortIcon';
import appStyles from 'constants/appStyles';
import CoinListItem from 'containers/CoinListItem';
import Coin from 'models/Coin';
import React from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';

interface Props {
  data: Coin[];
  onPressSortByCoin: () => void;
  sortByPrice: () => void;
}

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

const CoinsList: React.FC<Props> = ({data, onPressSortByCoin, sortByPrice}) => {
  const {width} = useWindowDimensions();

  const HeaderComponent = () => (
    <View style={styles.headerContainer}>
      <HeaderTitle text="Coin" onPress={onPressSortByCoin} />
      <HeaderTitle text="Price" onPress={sortByPrice} />
    </View>
  );

  const renderItem = ({item}: {item: Coin}) => <CoinListItem item={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={{width: width * 0.9}}
      ListHeaderComponent={<HeaderComponent />}
    />
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
