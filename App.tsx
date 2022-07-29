import * as React from 'react';
import {KeyboardAvoidingView, StatusBar} from 'react-native';
import appStyles from './src/constants/appStyles';
import RootNavigator from './src/navigation/RootNavigator';
import MyStatusBar from './src/components/MyStatusBar';

const App = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: appStyles.colors.backgroundMain}}>
      <MyStatusBar />
      {/* <StatusBar backgroundColor={appStyles.colors.brand} /> */}
      <RootNavigator />
    </KeyboardAvoidingView>
  );
};

export default App;
