import * as React from 'react';
import {KeyboardAvoidingView, StatusBar} from 'react-native';
import appStyles from './src/constants/appStyles';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: appStyles.colors.backgroundMain}}>
      <StatusBar backgroundColor={appStyles.colors.brand} />
      <RootNavigator />
    </KeyboardAvoidingView>
  );
};

export default App;
