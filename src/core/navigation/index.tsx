import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../views/Home';
import Detail from '../../views/Detail';
import {NavigationContainer} from '@react-navigation/native';
import type {ScreensParams} from './types';

const Stack = createNativeStackNavigator<ScreensParams>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false, presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
