import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CurrencyImage from 'components/images/CurrencyImage';
import NavTitle from 'components/text/NavTitle';
import RootStackParamList from 'types/RootStackParams';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import appStyles from 'constants/appStyles';
import HeaderBackArrow from 'components/icons/HeaderBackArrow';
import CurrencyLineChart from 'components/charts/CurrencyLineChart';
import MainButton from 'components/buttons/MainButton';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import OverviewTable from './OverviewTable';
import CoinsList from 'containers/CoinsList';
import {setCurrencyScreenMode} from 'store/currencyOverviewSlice';
import LowHighTexts from './LowHighTexts';
import PriceAndChange from './PriceAndChange';

const CurrencyScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {screenMode, currencyInfo} = useAppSelector(
    state => state.currencyOverviewSlice,
  );

  const {id, name, image} = currencyInfo;

  useEffect(() => {
    setHeaderOptions();
  }, [screenMode, currencyInfo]);

  const setHeaderOptions = () => {
    switch (screenMode) {
      case 'view':
        setViewHeaderOptions();
        break;
      case 'search':
        setSearchHeaderOptions();
        break;
      default:
        return;
    }
  };

  const setSearchHeaderOptions = () => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackArrow
          onPress={() => dispatch(setCurrencyScreenMode('view'))}
        />
      ),
      headerRight: () => <></>,
      headerTitle: () => <NavTitle text="Search" />,
    });
  };

  const setViewHeaderOptions = () => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.row}>
          <HeaderBackArrow />
          <CurrencyImage uri={image.small} />
          <NavTitle text={name} />
        </View>
      ),
      headerRight: () => (
        <Icon
          name="search"
          color={appStyles.colors.textMain}
          size={24}
          onPress={onPressSearch}
        />
      ),
      headerTitle: () => <></>,
    });
  };

  const onPressSearch = () => {
    dispatch(setCurrencyScreenMode('search'));
  };

  return (
    <>
      {screenMode === 'view' ? (
        <ScrollView style={styles.screen}>
          <PriceAndChange />
          <LowHighTexts />
          <CurrencyLineChart currencyId={id} />
          <MainButton text={`Buy, Sell or Exchange ${name}`} />
          <Text style={styles.overviewText}>Overview</Text>
          <OverviewTable />
        </ScrollView>
      ) : (
        <View style={{alignItems: 'center'}}>
          <CoinsList />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: appStyles.colors.white,
    padding: 12,
    paddingTop: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overviewText: {
    fontFamily: appStyles.fonts.semiBold,
    fontSize: 20,
    marginTop: 30,
  },
});

export default CurrencyScreen;

type Props = NativeStackScreenProps<RootStackParamList, 'Currency'>;
