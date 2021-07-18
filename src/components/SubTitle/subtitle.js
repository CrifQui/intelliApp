import React from 'react';
import PropTypes from 'prop-types';
import {Text} from './styles';

const Subtitle = ({text, align, error}) => (
  <Text error={error} align={align}>
    {text}
  </Text>
);

Subtitle.propTypes = {
  text: PropTypes.string,
  align: PropTypes.string,
  error: PropTypes.bool,
};

export default Subtitle;
