import appStyles from 'constants/appStyles';
import React from 'react';
import {Text} from 'react-native';

interface Props {
  value: string | number;
  pastelColors?: boolean;
}

const PriceChangeText: React.FC<Props> = ({
  value = 0,
  pastelColors = false,
}) => {
  const valueIsNegative = value < 0;
  const changeColor = valueIsNegative
    ? appStyles.colors.redNegative
    : pastelColors
    ? appStyles.colors.greenPositivePastel
    : appStyles.colors.greenPositive;

  const text = typeof value === 'number' ? value.toFixed(2) : '';

  return (
    <Text
      style={{
        fontFamily: appStyles.fonts.regular,
        color: changeColor,
        ...(valueIsNegative && {top: 1}),
      }}>
      {text}%
    </Text>
  );
};

export default PriceChangeText;
