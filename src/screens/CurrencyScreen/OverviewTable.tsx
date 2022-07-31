import appStyles from 'constants/appStyles';
import {CURRENCY_SYMBOL} from 'constants/currency';
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useAppSelector} from 'store/hooks';
import coinPriceToLocaleString from 'util/numbers/coinPriceToLocaleString';

const Row: React.FC<RowProps> = ({
  leftCellTitle = '',
  leftCellValue,
  rightCellTitle = '',
  rightCellValue,
  last,
}) => (
  <View
    style={{
      flexDirection: 'row',
      ...(!last && {
        borderBottomColor: appStyles.colors.lightGrey,
        borderBottomWidth: 0.5,
      }),
    }}>
    <View style={styles.leftCell}>
      <Text style={styles.cellTitle}>{leftCellTitle}</Text>
      <Text style={styles.cellValue}>{leftCellValue}</Text>
    </View>
    {rightCellValue && (
      <View style={{...styles.leftCell, paddingLeft: 20, borderWidth: 0}}>
        <Text style={styles.cellTitle}>{rightCellTitle}</Text>
        <Text style={styles.cellValue}>{rightCellValue}</Text>
      </View>
    )}
  </View>
);

const OverviewTable = () => {
  const {currencyInfo} = useAppSelector(state => state.currencyOverviewSlice);

  const {
    symbol,

    market_data: {market_cap, total_volume, circulating_supply},
  } = currencyInfo;

  return (
    <View style={styles.table}>
      <Row
        leftCellTitle="Volume (1d):"
        leftCellValue={
          CURRENCY_SYMBOL + coinPriceToLocaleString(total_volume.eur)
        }
        rightCellTitle="Market cap:"
        rightCellValue={
          CURRENCY_SYMBOL + coinPriceToLocaleString(market_cap.eur)
        }
      />
      <Row
        leftCellTitle="Circulating supply:"
        leftCellValue={
          coinPriceToLocaleString(circulating_supply) +
          ' ' +
          symbol.toUpperCase()
        }
        last
      />
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: Dimensions.get('window').width,
    borderWidth: 0.5,
    borderColor: appStyles.colors.lightGrey,
    marginTop: 12,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    right: Dimensions.get('window').width * 0.03,
  },
  leftCell: {
    width: '50%',
    borderRightWidth: 0.5,
    borderColor: appStyles.colors.lightGrey,
    paddingLeft: 12,
    paddingVertical: 8,
  },
  cellTitle: {
    fontFamily: appStyles.fonts.regular,
    color: appStyles.colors.grey,
  },
  cellValue: {
    fontFamily: appStyles.fonts.semiBold,
    color: appStyles.colors.textMain,
    marginTop: 6,
  },
});

export default OverviewTable;

interface RowProps {
  leftCellTitle: string;
  leftCellValue: string;
  rightCellTitle?: string;
  rightCellValue?: string;
  last?: boolean;
}
