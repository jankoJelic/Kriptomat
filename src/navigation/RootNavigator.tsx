import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootStackParamList from 'models/RootStackParams';
import React from 'react';
import CurrencyScreen from 'screens/CurrencyScreen';
import HomeScreen from 'screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Currency" component={CurrencyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
