import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import appStyles from 'constants/appStyles';
import {Shadow} from 'react-native-shadow-2';

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
    <View style={{marginVertical: 10}}>
      <Shadow startColor={appStyles.colors.shadowStartColor}>
        <View style={styles.container}>
          <Icon name="search" color={appStyles.colors.textGrey} size={20} />
          <TextInput
            style={{width: '85%', marginLeft: 6}}
            value={input}
            onChangeText={handleInputChange}
          />
          <Icon
            name="x"
            size={20}
            color={appStyles.colors.textGrey}
            onPress={() => setInput('')}
          />
        </View>
      </Shadow>
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
    marginVertical: 0,
    height: 40,
  },
});

export default SearchBar;
