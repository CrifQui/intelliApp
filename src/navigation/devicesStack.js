import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../components/Menu';
import SearchBar from '../components/SearchBar';
import Devices from '../screens/Devices';

const Stack = createStackNavigator();

export const DevicesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Devices"
        component={Devices}
        options={{
          headerTitleAlign: 'left',
          headerLeft: () => <Menu />,
          headerTitle: () => <SearchBar />,
        }}
      />
    </Stack.Navigator>
  );
};
