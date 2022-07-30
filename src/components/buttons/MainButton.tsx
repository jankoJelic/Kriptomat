import appStyles from 'constants/appStyles';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import goToKriptomatWebSite from 'services/goToKriptomatWebSite';

const MainButton = ({text = ''}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={goToKriptomatWebSite}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.colors.actionBlue,
    borderRadius: appStyles.roundness,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: appStyles.fonts.semiBold,
    color: appStyles.colors.white,
  },
});

export default MainButton;
