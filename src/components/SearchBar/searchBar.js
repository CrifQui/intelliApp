import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Input from '../InputText';
import {Context} from '../../contexts/contextProvider';
import {Container, SearchIcon} from './styles';

const SearchBar = ({handleChange}) => {
  const {query, setQuery} = useContext(Context);
  return (
    <Container>
      <Input
        handleChange={handleChange}
        width={'80%'}
        value={query}
        setValue={setQuery}
      />
      <SearchIcon fill={'#63a6f5'} width="20" />
    </Container>
  );
};

SearchBar.propTypes = {query: PropTypes.string};

export default SearchBar;
