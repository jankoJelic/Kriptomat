import React, {useEffect, useState} from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions, StyleSheet, useWindowDimensions, View} from 'react-native';
import appStyles from 'constants/appStyles';
import getCurrencyChartData from 'services/getCurrencyChartData';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setIsLoading} from 'store/appSlice';
import RangeFilters from './RangeFilters';
import {
  Filter,
  setActiveFilter,
  storePricesData,
} from 'store/currencyOverviewSlice';
import filters from './filters';

const CurrencyLineChart = ({currencyId = ''}) => {
  const {width} = useWindowDimensions();
  const dispatch = useAppDispatch();
  const pricesData = useAppSelector(state => state.currencyOverviewSlice.pricesData);
  const [data, setData] = useState<number[]>([0]);

  const extractPricesFromResponse = (res: {
    data: {prices: [number, number][]};
  }) => res.data.prices.map(d => d[1]);

  const handleOnPressFilter = async (filter: Filter) => {
    dispatch(setActiveFilter(filters.find(f => f.id === filter.id)));

    const savedData = pricesData.find(
      d => d.filterId === filter.id && d.currencyId === currencyId,
    );

    if (!!savedData) {
      setData(savedData.prices);
    } else {
      await fetchChartData(filter);
    }
  };

  const fetchChartData = async (filter: Filter) => {
    dispatch(setIsLoading(true));

    const response = await getCurrencyChartData({
      days: filter.interval,
      id: currencyId,
    });

    if (response.status === 200) {
      const prices: number[] = extractPricesFromResponse(response);

      dispatch(
        storePricesData({
          filterId: filter.id,
          currencyId,
          prices,
        }),
      );
      setData(prices);
    }
    dispatch(setIsLoading(false));
  };

  useEffect(() => {
    handleOnPressFilter(filters[0]);
  }, []);

  const chartData = {
    labels: [''],
    datasets: [
      {
        data,
      },
    ],
  };

  return (
    <>
      <View style={styles.container}>
        <LineChart
          data={chartData}
          chartConfig={chartConfig}
          style={styles.chartStyle}
          width={width * 1.25}
          height={221}
          bezier
          withVerticalLabels={false}
          withHorizontalLabels={false}
          withVerticalLines={false}
          withHorizontalLines
          fromZero={false}
          withDots={false}
        />
        <View style={styles.xAxis} />
      </View>
      <RangeFilters onPressFilter={handleOnPressFilter} />
    </>
  );
};

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
