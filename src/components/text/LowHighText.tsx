import appStyles from 'constants/appStyles';
import { CURRENCY_SYMBOL } from 'constants/currency';
import React from 'react';
import { Text } from 'react-native';
import limitNumberToSixDecimals from 'util/numbers/limitNumberToSixDecimals';

interface Props {
  title: string;
  value: number | string;
};


const LowHighText:React.FC<Props> = ({title = '', value = 0}) => {
  const outputValue =
    typeof value === 'number' ? limitNumberToSixDecimals(value) : value;

  return (
    <Text style={{fontFamily: appStyles.fonts.regular, marginRight: 20}}>
      {title + ' ' + CURRENCY_SYMBOL + ' '}
      <Text style={{fontFamily: appStyles.fonts.semiBold}}>
        {outputValue}
      </Text>
    </Text>
  );
};

export default LowHighText;
