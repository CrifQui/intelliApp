import React from 'react';
import PropTypes from 'prop-types';
import {Text} from './styles';

const Subtitle = ({text}) => <Text>{text}</Text>;

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
