import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import TextInput from '.';

storiesOf('Login', module).add('Input', () => (
  <TextInput
    placeholder={'test placeholder'}
    handleChange={action('change text')}
  />
));
