import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Card from '.';

storiesOf('Marvel', module).add('Card', () => (
  <Card title={'test'} subtitle={'subtitle'} />
));
