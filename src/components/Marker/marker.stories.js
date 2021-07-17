import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Marker from '.';

storiesOf('Map', module).add('Marker', () => (
  <Marker coords={{latitude: 48.8634013, longitude: 2.3418027}} />
));
