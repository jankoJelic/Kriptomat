import React, {useEffect, useState} from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions, StyleSheet, useWindowDimensions, View} from 'react-native';
import appStyles from 'constants/appStyles';
import getCurrencyChartData from 'services/getCurrencyChartData';
import {useAppDispatch} from 'store/hooks';
import {setIsLoading} from 'store/appSlice';
import RangeFilters from './RangeFilters';
import {OnPressRangeFilterProps} from './types';

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

const CurrencyLineChart = ({id = ''}) => {
  const {width} = useWindowDimensions();
  const dispatch = useAppDispatch();

  const [data, setData] = useState<number[]>([0]);
  const [activeFilter, setActiveFilter] = useState(1);

  const onPressRangeFilter = async ({
    days,
    filterId,
  }: OnPressRangeFilterProps) => {
    dispatch(setIsLoading(true));

    const response = await getCurrencyChartData({days, id});

    if (response.status === 200) {
      setActiveFilter(filterId);
      setData(response.data.prices.map((d: {prices: []}[]) => d[1]));
    }
    dispatch(setIsLoading(false));
  };

  useEffect(() => {
    onPressRangeFilter({days: 1, filterId: 1});
  }, []);

  return (
    <>
      <View style={styles.container}>
        <LineChart
          data={{
            labels: [''],
            datasets: [
              {
                data,
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
      <RangeFilters
        onPressFilter={onPressRangeFilter}
        activeFilter={activeFilter}
      />
    </>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default CurrencyLineChart;
