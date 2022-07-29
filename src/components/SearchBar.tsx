import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import appStyles from 'constants/appStyles';

interface Props {
  onChange: (txt: string) => void;
}

const SearchBar: React.FC<Props> = ({onChange}) => {
  const [input, setInput] = useState('');

  const handleInputChange = (txt: string) => {
    setInput(txt);
    onChange(txt);
  };

  return (
    <View style={styles.container}>
      <Icon name="search" color={appStyles.colors.textGrey} size={20} />
      <TextInput
        style={{width: '90%', marginLeft: 6}}
        value={input}
        onChangeText={handleInputChange}
      />
      <Icon name="x" size={20} color={appStyles.colors.textGrey} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appStyles.colors.white,
    borderRadius: appStyles.roundness,
    paddingHorizontal: 18,
    marginVertical: 10,
  },
});

export default SearchBar;
