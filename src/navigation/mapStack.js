import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Map from '../screens/Map';
import Menu from '../components/Menu';

const Stack = createStackNavigator();

export const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={Map}
        options={{headerTitle: false, headerLeft: () => <Menu />}}
      />
    </Stack.Navigator>
  );
};
