import React from 'react';
import PropTypes from 'prop-types';
import {Input} from './styles';

const InputText = ({placeholder, value, handleChange, secureTextEntry}) => (
  <Input
    textAlign={'center'}
    secureTextEntry={secureTextEntry}
    selectTextOnFocus={true}
    value={value}
    placeholder={placeholder}
    placeholderTextColor={'#93AAC6'}
    onChangeText={text => handleChange(text)}
    clearTextOnFocus={true}
  />
);

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
};

export default InputText;
