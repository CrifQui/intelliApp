import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import Search from '.';

storiesOf('Devices', module).add('Search Bar', () => (
  <Search handleChange={() => action('test')} />
));
