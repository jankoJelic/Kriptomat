import appStyles from 'constants/appStyles';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import filters from './filters';
import {FilterId, OnPressRangeFilterProps} from './types';

interface Props {
  activeFilter: number;
  onPressFilter: ({
    days,
    filterId,
  }: {
    days: string | number;
    filterId: number;
  }) => void;
}

const RangeFilters: React.FC<Props> = ({activeFilter, onPressFilter}) => {
  return (
    <View style={styles.row}>
      {filters.map(f => {
        const isActive = activeFilter === f.id;

        const textColor = isActive
          ? appStyles.colors.white
          : appStyles.colors.actionBlue;

        const backgroundColor = isActive
          ? appStyles.colors.actionBlue
          : 'transparent';

        return (
          <TouchableOpacity
            onPress={() => onPressFilter({days: f.interval, filterId: f.id})}
            style={{
              ...styles.container,
              backgroundColor,
            }}>
            <Text
              style={{
                fontFamily: appStyles.fonts.regular,
                color: textColor,
              }}>
              {f.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default RangeFilters;
