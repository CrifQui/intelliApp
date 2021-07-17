import React from 'react';
import MapView from '../../components/Map';
import Marker from '../../components/Marker';
import Container from '../../components/ContainerScreen';

const Map = () => {
  return (
    <Container>
      <MapView>
        <Marker coords={{latitude: 48.8634013, longitude: 2.3418027}} />
      </MapView>
    </Container>
  );
};

export default Map;
