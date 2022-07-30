import MainButton from 'components/buttons/MainButton';
import appStyles from 'constants/appStyles';
import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

const ButtonFooter = () => {
  const {width} = useWindowDimensions();

  return (
    <Shadow
      containerViewStyle={{position: 'absolute', bottom: 0}}
      startColor={appStyles.colors.shadowStartColor}>
      <View style={{...styles.container, width}}>
        <MainButton text="Kriptomat Account" />
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.colors.white,
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default ButtonFooter;
