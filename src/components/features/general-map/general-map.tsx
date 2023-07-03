import { useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from 'constants/map-const';
import { countAverageCoordinate } from 'utils/map-utils';
import { Vehicle } from 'types/vehicles';
import { CoordinatesProps } from 'types/map';
import MapPin from '../../ui-components/map-pin/map-pin';
import VehiclesMapModal from './vehicles-map-modal/vehicles-map-modal';

interface GeneralMapProps {
  vehicles: Vehicle[];
}

function GeneralMap({ vehicles }: GeneralMapProps) {
  const CARD_WIDTH = 300;
  const mapRef = useRef<MapView | null>(null);

  // Average latitude and longitude is counted from all vehicles coordinates
  // in order to get the average default coordinates for the map;
  const averageLatitude = useMemo(() => countAverageCoordinate(vehicles, 'latitude'), [vehicles]);
  const averageLongitude = useMemo(() => countAverageCoordinate(vehicles, 'longitude'), [vehicles]);

  // The number of the current selected vehicle point, default 0;
  const [selectedVehicleNumber, setSelectedVehicleNumber] = useState<number>(0);

  // Coordinates of the current selected point;
  const [selectedVehiclePointCoordinates, setSelectedVehiclePointCoordinates] =
    useState<CoordinatesProps>({
      latitude: 1,
      longitude: 1,
    });

  // Function passed to VehicleMapPin to save the selected vehicle number and coordinates;
  const handleSelectVehiclePoint = useCallback((vehicle: Vehicle, currentVehicleIndex: number) => {
    if (
      vehicle.current_location.latitude !== selectedVehiclePointCoordinates.latitude &&
      vehicle.current_location.longitude !== selectedVehiclePointCoordinates.longitude
    ) {
      setSelectedVehicleNumber(currentVehicleIndex);
      setSelectedVehiclePointCoordinates({
        latitude: vehicle.current_location.latitude,
        longitude: vehicle.current_location.longitude,
      });
    }
  }, []);

  // function passed to scrollView - after scroll the vehicles list
  // set selected coordinates;
  const onScrollCardsSetSelectedVehicle = (coordinates: CoordinatesProps) => {
    setSelectedVehiclePointCoordinates(coordinates);
  };

  return (
    <View style={styles.container}>
      {/*--- Map ---*/}
      <MapView
        style={styles.map}
        region={{
          latitude: averageLatitude,
          longitude: averageLongitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        clusterColor="#FF5A60"
        ref={mapRef}
      >
        {/*--- Map Pins ---*/}
        {vehicles.map((vehicle, index) => (
          <Marker
            coordinate={vehicle.current_location}
            onPress={() => {
              handleSelectVehiclePoint(vehicle, index);
            }}
            key={index}
          >
            <MapPin categoryOfVehicle={vehicle.category} />
          </Marker>
        ))}
      </MapView>

      {/*--- Modal with a list of vehicle cards ---*/}
      <VehiclesMapModal
        mapRef={mapRef}
        cardWidth={CARD_WIDTH}
        vehicles={vehicles}
        selectedVehicleNumber={selectedVehicleNumber}
        onScrollCardsSetSelectedVehicle={onScrollCardsSetSelectedVehicle}
      />
    </View>
  );
}

export default GeneralMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
