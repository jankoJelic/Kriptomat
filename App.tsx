import * as React from 'react';
import {SafeAreaView} from 'react-native';
import appStyles from './src/constants/appStyles';
import RootNavigator from './src/navigation/RootNavigator';
import MyStatusBar from './src/components/MyStatusBar';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: appStyles.colors.backgroundMain}}>
      <Provider store={store}>
        <MyStatusBar />
        <RootNavigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
