import React from 'react';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import Map from '../screens/Map';
import Menu from '../components/Menu';

const Stack = createStackNavigator();

export const MapStack = () => {
  const {t} = useTranslation('common');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={t('@menu-screen-map')}
        component={Map}
        options={{headerTitle: false, headerLeft: () => <Menu />}}
      />
    </Stack.Navigator>
  );
};
