import appStyles from 'constants/appStyles';
import React from 'react';
import {Text} from 'react-native';

const PriceChangeText = ({value = 0, pastelColors = false}) => {
  const valueIsNegative = value < 0;
  const changeColor = valueIsNegative
    ? appStyles.colors.redNegative
    : pastelColors
    ? appStyles.colors.greenPositivePastel
    : appStyles.colors.greenPositive;

  return (
    <Text
      style={{
        fontFamily: appStyles.fonts.regular,
        color: changeColor,
        ...(valueIsNegative && {top: 1}),
      }}>
      {value.toFixed(2)}%
    </Text>
  );
};

export default PriceChangeText;
