import React, {useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from './styles';

const Map = ({children}) => {
  const mapRef = useRef(null);

  return (
    <Container>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 48.8634013,
          longitude: 2.3418027,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {children}
      </MapView>
    </Container>
  );
};

Map.prototypes = {
  children: PropTypes.node.isRequired,
};

export default Map;
