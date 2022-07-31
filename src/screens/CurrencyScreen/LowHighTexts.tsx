import LowHighText from 'components/text/LowHighText';
import React from 'react';
import { View } from 'react-native';
import {useAppSelector} from 'store/hooks';
import getCurrencyInfoByInterval from './getCurrencyInfoByInterval';

const LowHighTexts = () => {
  const activeFilter = useAppSelector(
    state => state.currencyOverviewSlice.activeFilter,
  );
  
  return (
    <View style={{marginTop: 10, flexDirection: 'row'}}>
      <LowHighText
        title={`${activeFilter.title} Low`}
        value={getCurrencyInfoByInterval().low}
      />
      <LowHighText
        title={`${activeFilter.title} High`}
        value={getCurrencyInfoByInterval().high}
      />
    </View>
  );
};
export default LowHighTexts;
