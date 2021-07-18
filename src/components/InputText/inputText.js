import React from 'react';
import PropTypes from 'prop-types';
import {Input} from './styles';

const InputText = ({placeholder, value, setValue, secureTextEntry, error}) => {
  const handleChange = text => {
    setValue(text);
  };

  return (
    <Input
      textAlign={'center'}
      secureTextEntry={secureTextEntry}
      selectTextOnFocus={true}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={'#93AAC6'}
      onChangeText={text => handleChange(text)}
      clearTextOnFocus={true}
      error={error}
    />
  );
};

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  error: PropTypes.bool.isRequired,
};

export default InputText;
