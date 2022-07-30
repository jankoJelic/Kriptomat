import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions, StyleSheet, useWindowDimensions, View} from 'react-native';
import appStyles from 'constants/appStyles';

const CurrencyLineChart = () => {
  const {width} = useWindowDimensions();

  const chartConfig = {
    backgroundGradientFrom: appStyles.colors.backgroundMain,
    backgroundGradientTo: appStyles.colors.backgroundMain,
    color: () => appStyles.colors.actionBlue,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    propsForBackgroundLines: {
      stroke: appStyles.colors.lightGrey,
    },
    fillShadowGradientFrom: appStyles.colors.backgroundMain,
    fillShadowGradientTo: appStyles.colors.backgroundMain,
  };

  return (
    <View style={styles.container}>
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
        chartConfig={chartConfig}
        style={styles.chartStyle}
        width={width * 1.25}
        height={221}
        bezier
        withVerticalLabels={false}
        withHorizontalLabels={false}
        withVerticalLines={false}
        withHorizontalLines
        fromZero
        withDots={false}
      />
      <View style={styles.xAxis} />
    </View>
  );
};

const styles = StyleSheet.create({
  xAxis: {
    position: 'absolute',
    bottom: 38.7,
    height: 1,
    backgroundColor: appStyles.colors.lightGrey,
    width: '100%',
  },
  container: {
    width: Dimensions.get('window').width * 0.94,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  chartStyle: {
    alignSelf: 'center',
    marginTop: 14,
  },
});

export default CurrencyLineChart;
