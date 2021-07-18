import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import Device from '../Device';
import {Container} from './styles';

const ListOfDevices = ({data}) => {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item?.id_device}
        renderItem={item => {
          return (
            <Device
              width={'100%'}
              height={'100px'}
              title={`Name: ${item?.item?.device_name}`}
              subtitle={`Model : ${item?.item?.device_model}`}
            />
          );
        }}
        numColumns={1}
      />
    </Container>
  );
};

ListOfDevices.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListOfDevices;
