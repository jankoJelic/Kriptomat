import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import appStyles from 'constants/appStyles';

const SearchBar = () => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: appStyles.roundness,
        paddingHorizontal: 18,
        marginVertical: 10,
      }}>
      <Icon name="search" color={appStyles.colors.textGrey} size={20} />
      <TextInput style={{width: '90%'}} />
      <Icon name="x" size={20} />
    </View>
  );
};

export default SearchBar;
