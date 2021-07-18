import React from 'react';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import Marvel from '../screens/Marvel';
import Menu from '../components/Menu';
import SwitchLanguage from '../components/SwitchLanguage';

const Stack = createStackNavigator();

export const MarvelStack = () => {
  const {t} = useTranslation('common');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={t('@menu-screen-marvel')}
        component={Marvel}
        options={{
          headerTitle: false,
          headerLeft: () => <Menu />,
          headerRight: () => <SwitchLanguage />,
        }}
      />
    </Stack.Navigator>
  );
};
