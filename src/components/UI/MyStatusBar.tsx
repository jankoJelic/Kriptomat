import appStyles from 'constants/appStyles';
import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';

const MyStatusBar = () => (
  <View style={styles.statusBar}>
    <SafeAreaView style={{backgroundColor: appStyles.colors.brand}}>
      <StatusBar
        translucent
        backgroundColor={appStyles.colors.brand}
        barStyle="light-content"
        animated
      />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: appStyles.colors.brand,
  },
});

export default MyStatusBar;
