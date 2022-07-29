import useAbortEffect from 'hooks/useAbortEffect';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import getTop50Currencies from 'services/getTop50Currencies';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  
  useAbortEffect(async () => {
    const response = await getTop50Currencies();

    console.log(response);
  });

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
