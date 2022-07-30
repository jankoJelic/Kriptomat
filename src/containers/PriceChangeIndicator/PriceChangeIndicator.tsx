import PriceChangeTriangle from 'components/icons/PriceChangeTriangle';
import PriceChangeText from 'components/text/PriceChangeText';
import appStyles from 'constants/appStyles';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const PriceChangeIndicator = ({value = 0, pastelColors = false}) => {
  return (
    <View
      style={{
        ...styles.row,
        ...(pastelColors && {
          borderRadius: appStyles.roundness,
          paddingHorizontal: 8,
          paddingVertical: 6,
          backgroundColor:
            value < 0
              ? appStyles.colors.redNegativeLight
              : appStyles.colors.greenPositivePastelLight,
        }),
      }}>
      <PriceChangeTriangle value={value} pastelColors={pastelColors} />
      <PriceChangeText value={value} pastelColors={pastelColors} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PriceChangeIndicator;
