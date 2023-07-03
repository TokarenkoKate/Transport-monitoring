import Config from 'react-native-config';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { CoordinatesProps, RouteProps } from 'types/map';
import { DRIVING_MODE, LATITUDE_DELTA, LONGITUDE_DELTA } from 'constants/map-const';
import { VehicleCategory } from 'constants/vehicle-const';
import MapPin from 'components/ui-components/map-pin/map-pin';

interface VehicleMapProps {
  category: VehicleCategory;
  currentLocation: CoordinatesProps;
  route: RouteProps;
}

function VehicleMap({ category, currentLocation, route }: VehicleMapProps) {
  const GOOGLE_MAPS_APIKEY = Config.GOOGLE_MAPS_API_KEY;
  const { departure_point, destination_point } = route;
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
    >
      {/*--- Map Points: current driver location, departure, destination points ---*/}
      <Marker coordinate={currentLocation}>
        <MapPin categoryOfVehicle={category} />
      </Marker>
      <Marker coordinate={route.departure_point}>
        <MapPin />
      </Marker>
      <Marker coordinate={route.destination_point}>
        <MapPin />
      </Marker>

      {/*--- Driver route ---*/}
      {GOOGLE_MAPS_APIKEY && (
        <MapViewDirections
          mode={DRIVING_MODE}
          origin={{
            latitude: departure_point.latitude,
            longitude: departure_point.longitude,
          }}
          destination={{
            latitude: destination_point.latitude,
            longitude: destination_point.longitude,
          }}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4.5}
          strokeColor="#0170FD"
        />
      )}
    </MapView>
  );
}

export default VehicleMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
