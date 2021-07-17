import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ModalCustom from '.';

storiesOf('Marvel', module).add('ModalCustom', () => (
  <ModalCustom visible={false} />
));
