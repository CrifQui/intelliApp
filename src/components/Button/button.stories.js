import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Button from '../../../src/components/Button';

storiesOf('Login', module).add('Button', () => (
  <Button handlePress={action('clicked-text')} text="Login" />
));
