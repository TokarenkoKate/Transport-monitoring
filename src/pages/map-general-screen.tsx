import { View, StyleSheet } from 'react-native';
import { MainStackScreenProps } from 'types/navigation';
import { getAllVehicles } from 'store/vehicles/selectors';
import { useAppSelector } from 'hooks/redux';
import GeneralMap from 'components/features/general-map/general-map';
import BackButton from 'components/ui-components/buttons/back-button/back-button';

function MapGeneralScreen({ navigation }: MainStackScreenProps<'MapGeneralScreen'>) {
  const vehicles = useAppSelector(getAllVehicles);

  return (
    <View style={styles.container}>
      <GeneralMap vehicles={vehicles} />
      <BackButton onPressGoBack={navigation.goBack} style={styles.backButton} />
    </View>
  );
}

export default MapGeneralScreen;

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
