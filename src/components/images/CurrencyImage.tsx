import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface Props {
  uri: string;
}

export const CurrencyImage: React.FC<Props> = ({uri}) => (
  <Image source={{uri}} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {width: 32, aspectRatio: 1, marginRight: 10},
});

export default CurrencyImage;
