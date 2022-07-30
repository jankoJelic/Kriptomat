import appStyles from 'constants/appStyles';
import React, {useEffect} from 'react';
import {
  Animated,
  useWindowDimensions,
  View,
  Easing,
  StyleSheet,
} from 'react-native';
import {useAppSelector} from 'store/hooks';
import lowerColorOpacity from 'util/colors/lowerColorOpacity';
import LoadingSpinner from 'assets/images/loadingSpinner.svg';

const FullScreenLoadingSpinner = () => {
  const {width, height} = useWindowDimensions();
  const visible = useAppSelector(state => state.appSlice.isLoading);

  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    visible && (
      <View
        style={{
          ...styles.container,
          width,
          height,
        }}>
        <Animated.View
          style={{
            transform: [{rotate: spin}, {scale: 0.55}],
            zIndex: 100,
          }}>
          <LoadingSpinner />
        </Animated.View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lowerColorOpacity({
      hex: appStyles.colors.brand,
      opacity: 0.3,
    }),
  },
});

export default FullScreenLoadingSpinner;
