import React from 'react';
import PropTypes from 'prop-types';
import {Text} from './styles';

const Title = ({text}) => <Text>{text.toUpperCase()}</Text>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
