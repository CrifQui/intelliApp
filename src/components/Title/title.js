import React from 'react';
import PropTypes from 'prop-types';
import {Text} from './styles';

const Title = ({text}) => <Text>{text}</Text>;

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
