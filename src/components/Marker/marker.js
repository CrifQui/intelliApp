import React from 'react';
import {Marker as Icon} from 'react-native-maps';
import PropTypes from 'prop-types';

const Marker = ({coords}) => {
  return <Icon coordinate={coords} />;
};

Marker.propTypes = {
  coords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,
};

export default Marker;
