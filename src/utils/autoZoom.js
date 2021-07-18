import {Dimensions} from 'react-native';

export const handleReady = (coords, mapRef) => {
  const {width, height} = Dimensions.get('screen');
  mapRef?.current &&
    mapRef.current.fitToCoordinates([coords], {
      edgePadding: {
        right: width / 20,
        bottom: height / 20,
        left: width / 20,
        top: height / 20,
      },
    });
};
