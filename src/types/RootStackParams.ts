import CoinDetails from './CoinDetails';

type RootStackParamList = {
  Home: undefined;
  Currency: {coinDetails: CoinDetails};
};

export default RootStackParamList;
