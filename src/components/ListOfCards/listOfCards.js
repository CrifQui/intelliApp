import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import Card from '../Card';
import {Content} from './styles';

const ListOfCards = ({data, handlePress}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item}
      renderItem={() => (
        <Content>
          <Card handlePress={handlePress} />
        </Content>
      )}
      numColumns={2}
    />
  );
};

ListOfCards.propTypes = {
  data: PropTypes.array.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default ListOfCards;
