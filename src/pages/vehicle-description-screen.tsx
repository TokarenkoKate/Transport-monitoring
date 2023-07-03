import { StyleSheet, View } from 'react-native';
import { MainStackScreenProps } from 'types/navigation';
import VehicleCard from 'components/features/vehicle-map/vehicle-map-card/vehicle-map-card';
import VehicleMap from 'components/features/vehicle-map/vehicle-map';
import BackButton from 'components/ui-components/buttons/back-button/back-button';

function VehicleDescriptionScreen({
  navigation,
  route,
}: MainStackScreenProps<'VehicleDescriptionScreen'>) {
  const { vehicle } = route.params;

  return (
    <View style={styles.container}>
      {/*--- Map that displays current vehicle location and directions route ---*/}
      <VehicleMap
        category={vehicle.category}
        currentLocation={vehicle.current_location}
        route={vehicle.route}
      />

      {/*--- Card with detailed data ---*/}
      <VehicleCard vehicle={vehicle} />
      <BackButton onPressGoBack={navigation.goBack} style={styles.backButton} />
    </View>
  );
}

export default VehicleDescriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backButton: {
    top: 24,
    left: 24,
  },
});
