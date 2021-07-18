import React from 'react';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../components/Menu';
import SwitchLanguage from '../components/SwitchLanguage';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const {t} = useTranslation('common');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={t('@menu-screen-home')}
        component={Home}
        options={{
          headerTitle: false,
          headerLeft: () => <Menu />,
          headerRight: () => <SwitchLanguage />,
        }}
      />
    </Stack.Navigator>
  );
};
