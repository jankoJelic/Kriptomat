import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';
import {KeyboardAvoidingView, StatusBar} from 'react-native';
import appStyles from 'constants/appStyles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={appStyles.colors.brandColor} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

export default App;
