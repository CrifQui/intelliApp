import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Subtitle from '.';

storiesOf('Utils', module).add('Subtitle', () => (
  <Subtitle text={'Este es un titulo de prueba'} />
));
