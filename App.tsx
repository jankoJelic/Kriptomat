import * as React from 'react';
import {KeyboardAvoidingView, SafeAreaView} from 'react-native';
import appStyles from './src/constants/appStyles';
import RootNavigator from './src/navigation/RootNavigator';
import MyStatusBar from './src/components/MyStatusBar';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1, backgroundColor: appStyles.colors.backgroundMain}}>
      <Provider store={store}>
        <MyStatusBar />
        <RootNavigator />
      </Provider>
    </KeyboardAvoidingView>
  );
};

export default App;
