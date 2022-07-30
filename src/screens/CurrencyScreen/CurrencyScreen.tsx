import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from 'models/RootStackParams';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Currency'>;

const CurrencyScreen = ({navigation, route}: Props) => {
  const {coinDetails} = route.params;

  useEffect(() => {
    navigation.setOptions({});
  });
  return (
    <View>
      <Text>Currency screen</Text>
    </View>
  );
};

export default CurrencyScreen;
