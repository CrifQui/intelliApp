import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from './styles';

const Map = ({children, mapRef}) => {
  return (
    <Container>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}>
        {children}
      </MapView>
    </Container>
  );
};

Map.prototypes = {
  children: PropTypes.node.isRequired,
  mapRef: PropTypes.node,
};

export default Map;
