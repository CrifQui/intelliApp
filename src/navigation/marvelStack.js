import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Marvel from '../screens/Marvel';
import Menu from '../components/Menu';

const Stack = createStackNavigator();

export const MarvelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Marvel"
        component={Marvel}
        options={{headerTitle: false, headerLeft: () => <Menu />}}
      />
    </Stack.Navigator>
  );
};
