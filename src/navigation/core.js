import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {Context} from '../contexts/contextProvider';
import {MarvelStack} from './marvelStack';
import {HomeStack} from './homeStack';
import {LoginStack} from './loginStack';
import {MapStack} from './mapStack';
import {DevicesStack} from './devicesStack';
import {LightTheme} from '../utils/themes';

const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  const {t} = useTranslation('common');
  const scheme = useColorScheme();
  const {isAuth} = useContext(Context);

  return (
    <NavigationContainer theme={scheme === 'light' && LightTheme}>
      {isAuth ? (
        <Drawer.Navigator>
          <Drawer.Screen name={t('@menu-screen-home')} component={HomeStack} />
          <Drawer.Screen
            name={t('@menu-screen-marvel')}
            component={MarvelStack}
          />
          <Drawer.Screen
            name={t('@menu-screen-devices')}
            component={DevicesStack}
          />
          <Drawer.Screen
            name={'Map'}
            component={MapStack}
            options={{
              drawerLabel: () => null,
              title: null,
              drawerIcon: () => null,
            }}
          />
        </Drawer.Navigator>
      ) : (
        <LoginStack />
      )}
    </NavigationContainer>
  );
};

export default DrawerStack;
