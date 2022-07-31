import appStyles from 'constants/appStyles';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

interface Props {
  value: string | number;
  pastelColors?: boolean;
}

const PriceChangeTriangle: React.FC<Props> = ({
  value = 0,
  pastelColors = false,
}) => {
  const negativeChange = value < 0;

  const color = negativeChange
    ? appStyles.colors.redNegative
    : pastelColors
    ? appStyles.colors.greenPositivePastel
    : appStyles.colors.greenPositive;

  return (
    <Icon
      name={negativeChange ? 'triangle-down' : 'triangle-up'}
      size={18}
      color={color}
      style={{top: 1}}
    />
  );
};

export default PriceChangeTriangle;
