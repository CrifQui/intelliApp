import React, {useContext} from 'react';
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
  const scheme = useColorScheme();
  const {isAuth} = useContext(Context);

  return (
    <NavigationContainer theme={scheme === 'light' && LightTheme}>
      {isAuth ? (
        <Drawer.Navigator>
          <Drawer.Screen name={'Home'} component={HomeStack} />
          <Drawer.Screen name={'Marvel'} component={MarvelStack} />
          <Drawer.Screen name={'Devices'} component={DevicesStack} />
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
