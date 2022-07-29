import appStyles from 'constants/appStyles';
import React from 'react';
import {View} from 'react-native';

interface Props {
  direction: 'up' | 'down';
  size?: number;
  color: string;
}

const Triangle: React.FC<Props> = ({direction, size = 6}) => (
  <View
    style={{
      width: 8,
      height: 9,
      borderColor: 'transparent',
      borderWidth: size,
      marginRight: 4,
      borderRadius: 2,
      ...(direction === 'up' && {
        borderBottomColor: appStyles.colors.greenPositive,
        bottom: 0,
      }),
      ...(direction === 'down' && {
        borderTopColor: appStyles.colors.redNegative,
        top: size,
      }),
    }}
  />
);

export default Triangle;
