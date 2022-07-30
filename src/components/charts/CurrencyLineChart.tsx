import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {useWindowDimensions, View} from 'react-native';
import appStyles from 'constants/appStyles';

const CurrencyLineChart = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={{
        width: width * 0.94,
        overflow: 'hidden',
        alignSelf: 'center',
      }}>
      <LineChart
        data={{
          labels: [''],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={width * 1.3}
        height={221}
        chartConfig={{
          backgroundGradientFrom: appStyles.colors.backgroundMain,
          backgroundGradientTo: appStyles.colors.backgroundMain,
          color: (opacity = 1) => appStyles.colors.brand,
          fillShadowGradient: appStyles.colors.backgroundMain,
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          propsForBackgroundLines: {
            stroke: appStyles.colors.grey,
          },
        }}
        style={{
          alignSelf: 'center',
          marginTop: 14,
        }}
        bezier
        withVerticalLabels={false}
        withHorizontalLabels={false}
        withVerticalLines={false}
        withHorizontalLines
        fromZero
        withDots={false}
      />
    </View>
  );
};

export default CurrencyLineChart;
