import React from 'react';
import PropTypes from 'prop-types';
import {Touchable, Text} from './styles';

const Button = ({handlePress, text}) => (
  <Touchable activeOpacity={0.8} onPress={() => handlePress()}>
    <Text>{text}</Text>
  </Touchable>
);

Button.propTypes = {
  handlePress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
