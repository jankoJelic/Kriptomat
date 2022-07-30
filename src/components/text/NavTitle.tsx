import appStyles from 'constants/appStyles';
import React from 'react';
import {Text} from 'react-native';

interface Props {
  text: string;
}

const NavTitle: React.FC<Props> = ({text}) => {
  return (
    <Text
      style={{
        fontFamily: appStyles.fonts.semiBold,
        color: appStyles.colors.textMain,
        fontSize: 18,
      }}>
      {text}
    </Text>
  );
};

export default NavTitle;
