import appStyles from 'constants/appStyles';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    position: 'absolute',
    height: 1,
    backgroundColor: appStyles.colors.black,
    opacity: 0.05,
    width: '100%',
    bottom: 0,
  },
});

export default Divider;
