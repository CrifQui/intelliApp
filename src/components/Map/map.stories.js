import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Map from '.';
import Marker from '../Marker';
storiesOf('Map', module).add('Map', () => (
  <Map>
    <Marker coords={{latitude: 48.8634013, longitude: 2.3418027}} />
  </Map>
));
