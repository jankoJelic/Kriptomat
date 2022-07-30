import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootStackParamList from 'models/RootStackParams';
import React from 'react';
import CurrencyScreen from 'screens/CurrencyScreen';
import HomeScreen from 'screens/HomeScreen';
import HeaderBackArrow from 'components/icons/HeaderBackArrow';
import appStyles from 'constants/appStyles';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {backgroundColor: appStyles.colors.backgroundMain},
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Currency"
          component={CurrencyScreen}
          options={{
            headerBackVisible: false,
            headerTitle: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
