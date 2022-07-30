import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CurrencyImage from 'components/images/CurrencyImage';
import NavTitle from 'components/text/NavTitle';
import RootStackParamList from 'models/RootStackParams';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Currency'>;

const CurrencyScreen = ({navigation, route}: Props) => {
  const {
    coinDetails: {name, image},
  } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CurrencyImage uri={image.small} />
          <NavTitle text={name} />
        </View>
      ),
    });
  });

  return (
    <View>
      <Text>Currency screen</Text>
    </View>
  );
};

export default CurrencyScreen;
