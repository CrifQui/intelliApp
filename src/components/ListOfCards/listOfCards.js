import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import Card from '../Card';
import {Content} from './styles';

const ListOfCards = ({data, handlePress}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item?.id}
      renderItem={item => {
        return (
          <Content>
            <Card
              id={item?.item?.id}
              height={'300px'}
              title={item?.item?.name}
              subtitle={`comic #${item?.item?.comics?.available}`}
              handlePress={handlePress}
              image={{
                uri: `${item?.item?.thumbnail?.path}.${item?.item?.thumbnail?.extension}`,
              }}
            />
          </Content>
        );
      }}
      numColumns={2}
    />
  );
};

ListOfCards.propTypes = {
  data: PropTypes.array.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default ListOfCards;
