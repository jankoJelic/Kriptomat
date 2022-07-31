import appStyles from 'constants/appStyles';
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

interface RowProps {
  leftCellTitle: string;
  leftCellValue: string;
  rightCellTitle?: string;
  rightCellValue?: string;
  last?: boolean;
}

interface TableProps {
  firstCellTitle: string;
  firstCellValue: string;
  secondCellTitle: string;
  secondCellValue: string;
  thirdCellTitle: string;
  thirdCellValue: string;
}

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

const OverviewTable: React.FC<TableProps> = ({
  firstCellTitle,
  firstCellValue,
  secondCellTitle,
  secondCellValue,
  thirdCellTitle,
  thirdCellValue,
}) => (
  <View style={styles.table}>
    <Row
      leftCellTitle={firstCellTitle}
      leftCellValue={firstCellValue}
      rightCellTitle={secondCellTitle}
      rightCellValue={secondCellValue}
    />
    <Row leftCellTitle={thirdCellTitle} leftCellValue={thirdCellValue} last />
  </View>
);

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
