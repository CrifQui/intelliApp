import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Title from '.';

storiesOf('Utils', module).add('Title', () => (
  <Title text={'Este es un titulo de prueba'} />
));
