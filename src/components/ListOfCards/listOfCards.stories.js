import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import ListOfCards from '.';

storiesOf('Marvel', module).add('ListOfCards', () => (
  <ListOfCards
    data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
    handlePress={() => action('testing cards')}
  />
));
