import useAbortEffect from 'hooks/useAbortEffect';
import Coin from 'models/Coin';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import getCurrencies from 'services/getCurrencies';

const HomeScreen = () => {
  const [data, setData] = useState<Coin[]>([]);

  useAbortEffect(async () => {
    const response = await getCurrencies();

    if (response.status === 200) {
      setData(response.data);
    }
  });

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
