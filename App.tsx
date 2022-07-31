import * as React from 'react';
import {View} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import MyStatusBar from './src/components/UI/MyStatusBar';
import {Provider} from 'react-redux';
import store from './src/store';
import FullScreenLoadingSpinner from './src/components/UI/FullScreenLoadingSpinner';
import ButtonFooter from './src/containers/ButtonFooter';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <MyStatusBar />
        <RootNavigator />
        <ButtonFooter />
        <FullScreenLoadingSpinner />
      </Provider>
    </View>
  );
};

export default App;
