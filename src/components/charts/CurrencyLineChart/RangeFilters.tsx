import appStyles from 'constants/appStyles';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {Filter} from 'store/currencyOverviewSlice';
import {useAppSelector} from 'store/hooks';
import filters from './filters';

interface Props {
  onPressFilter: (filter: Filter) => void;
}

const RangeFilters: React.FC<Props> = ({onPressFilter}) => {
  const activeFilterId = useAppSelector(
    state => state.currencyOverviewSlice.activeFilter.id,
  );

  return (
    <View style={styles.row}>
      {filters.map(f => {
        const isActive = activeFilterId === f.id;

        const textColor = isActive
          ? appStyles.colors.white
          : appStyles.colors.actionBlue;

        const backgroundColor = isActive
          ? appStyles.colors.actionBlue
          : 'transparent';

        return (
          <TouchableOpacity
            key={f.id.toString() + f.title}
            onPress={() => onPressFilter(f)}
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
    marginBottom: 26,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default RangeFilters;
