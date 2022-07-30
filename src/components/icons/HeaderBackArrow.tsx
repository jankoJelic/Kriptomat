import appStyles from 'constants/appStyles';
import useMyNavigation from 'hooks/useMyNavigation';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderBackArrow = () => {
  const navigation = useMyNavigation();

  return (
    <Icon
      name="arrow-left"
      solid
      size={20}
      color={appStyles.colors.textMain}
      style={{marginRight: 12}}
      onPress={() => navigation.pop()}
    />
  );
};

export default HeaderBackArrow;
