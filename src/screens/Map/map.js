import React, {useState, useRef} from 'react';
import MapView from '../../components/Map';
import Marker from '../../components/Marker';
import {useFocusEffect} from '@react-navigation/native';
import Geo from 'react-native-geolocation-service';
import {requestPermissions} from '../../utils/requestLocation';
import {handleReady} from '../../utils/autoZoom';
import Container from '../../components/ContainerScreen';

const Map = () => {
  const [coords, setCoords] = useState({});
  const mapRef = useRef(null);
  const [hasPermission, setHasPermission] = useState();

  const getPosition = setCurrentPosition => {
    Geo.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentPosition(() => ({latitude, longitude}));
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: true, timeout: 50000, maximumAge: 1000},
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      getPosition(setCoords);
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      setHasPermission(requestPermissions());
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      handleReady(coords, mapRef);
    }, [coords, mapRef]),
  );

  return (
    <Container>
      <MapView mapRef={mapRef}>
        {coords?.latitude && <Marker coords={coords} />}
      </MapView>
    </Container>
  );
};

export default Map;
