import React from 'react';
import {useNavigation} from '@react-navigation/core';
import Icon from '../../../public/menu.svg';
import Map from '../../../public/map.svg';
import {Touchable, Container} from './styles';

const Menu = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.openDrawer();
  };

  const handleMapPress = () => {
    navigation.navigate('Map');
  };

  return (
    <Container>
      <Touchable onPress={() => handlePress()}>
        <Icon fill={'#000'} width="50" />
      </Touchable>
      <Touchable onPress={() => handleMapPress()}>
        <Map fill={'#63A6F5'} width="25" />
      </Touchable>
    </Container>
  );
};

export default Menu;
