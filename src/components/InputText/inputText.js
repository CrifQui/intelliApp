import React from 'react';
import PropTypes from 'prop-types';
import {Input} from './styles';

const InputText = ({
  placeholder,
  value,
  setValue,
  secureTextEntry,
  error,
  width,
}) => {
  const handleChange = text => {
    setValue(text);
  };

  return (
    <Input
      width={width}
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
  placeholder: PropTypes.string,
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  error: PropTypes.bool,
  width: PropTypes.string,
};

export default InputText;
