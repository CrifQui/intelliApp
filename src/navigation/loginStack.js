import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export const LoginStack = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen name={t('@menu-screen-login')} component={Login} />
    </Stack.Navigator>
  );
};
