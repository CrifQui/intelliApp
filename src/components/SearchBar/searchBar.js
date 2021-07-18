import React from 'react';
import PropTypes from 'prop-types';
import Input from '../InputText';
import {Container, SearchIcon} from './styles';

const searchBar = ({query, handleChange}) => {
  return (
    <Container>
      <Input placeholder="Search" handleChange={handleChange} />
      <SearchIcon fill={'#63a6f5'} width="20" />
    </Container>
  );
};

searchBar.propTypes = {query: PropTypes.string.isRequired};

export default searchBar;
