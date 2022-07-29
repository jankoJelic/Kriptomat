import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import appStyles from 'constants/appStyles';

const SortIcon = () => {
  return (
    <View>
      <Icon
        name="chevron-up"
        color={appStyles.colors.black}
        size={9}
        style={{top: 1}}
      />
      <Icon
        name="chevron-down"
        color={appStyles.colors.black}
        size={9}
        style={{bottom: 1}}
      />
    </View>
  );
};

export default SortIcon;
