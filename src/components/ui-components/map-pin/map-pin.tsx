import { View, StyleSheet, Image } from 'react-native';
import { VehicleCategory } from 'constants/vehicle-const';

interface MapPinProps {
  categoryOfVehicle?: VehicleCategory;
}

function MapPin({ categoryOfVehicle }: MapPinProps) {
  const getPinImage = () => {
    switch (categoryOfVehicle) {
    case VehicleCategory.Construction:
      return require('../../../assets/images/construction_pin.png');
    case VehicleCategory.Passenger:
      return require('../../../assets/images/passenger_pin.png');
    case VehicleCategory.Truck:
      return require('../../../assets/images/truck_pin.png');
    default:
      return require('../../../assets/images/map_pin.png');
    }
  };
  const currentPinImage = getPinImage();

  return (
    <View style={styles.imageWrapper}>
      <Image source={currentPinImage} style={styles.image} resizeMode="contain" />
    </View>
  );
}

export default MapPin;

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  image: {
    width: 50,
    height: 50,
  },
});
