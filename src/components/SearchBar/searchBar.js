import React from 'react';
import PropTypes from 'prop-types';
import Input from '../InputText';

const searchBar = ({query}) => {
  return <Input />;
};

searchBar.propTypes = {query: PropTypes.string.isRequired};

export default searchBar;
