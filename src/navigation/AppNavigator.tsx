import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SCREENS} from '../constants';
import {COLORS} from '../constants/colors';
import {AppNavigatorParamList} from '../models/navigation';
import {Home} from '../screens';

const Stack = createStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: COLORS.dark,
          },
        }}
        initialRouteName={SCREENS.HOME}>
        <Stack.Screen name={SCREENS.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
