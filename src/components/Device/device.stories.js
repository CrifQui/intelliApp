import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Device from '.';

storiesOf('Device', module).add('Device', () => (
  <Device title={'test'} subtitle={'subtitle'} />
));
