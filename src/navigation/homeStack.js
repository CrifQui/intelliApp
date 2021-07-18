import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../components/Menu';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: false, headerLeft: () => <Menu />}}
      />
    </Stack.Navigator>
  );
};
