import React from 'react';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../components/Menu';
import SearchBar from '../components/SearchBar';
import Devices from '../screens/Devices';

const Stack = createStackNavigator();

export const DevicesStack = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={t('@menu-screen-devices')}
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
