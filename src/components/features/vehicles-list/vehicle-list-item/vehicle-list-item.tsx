import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useIntl } from 'react-intl';
import { getFullName, getVehicleTitle } from 'utils/vehicle-utils';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from 'types/navigation';
import { Vehicle } from 'types/vehicles';
import Text from 'components/ui-components/text/text';
import Icon from 'components/ui-components/icon/icon';
import { images } from '../../../../assets/images/index';
import React from 'react';

function VehiclesListItem({ vehicle }: { vehicle: Vehicle }) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage: f } = useIntl();

  const vehicleTitle = getVehicleTitle(vehicle.title);
  const driverFullName = getFullName(vehicle.driver.firstName, vehicle.driver.lastName);

  const navigateToVehicleDescriptionScreen = () => {
    navigation.navigate('VehicleDescriptionScreen', { vehicle });
  };

  return (
    <TouchableOpacity onPress={navigateToVehicleDescriptionScreen}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text size="large" fontWeight="bold">
            {vehicleTitle}
          </Text>
          <View style={styles.dataRow}>
            <View style={styles.iconContainer}>
              <Icon variant="driver" size="medium" color="black" />
            </View>
            <Text size="medium" fontWeight="semiBold">
              {driverFullName}
            </Text>
          </View>
          <View style={styles.dataRow}>
            <View style={[styles.iconContainer, styles.iconContainerRed]}>
              <Icon variant={vehicle.category} size="medium" color="white" />
            </View>
            <Text size="medium" fontWeight="semiBold">
              {f({ id: 'list_' + vehicle.category }).toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={styles.pictureWrapper}>
          <Image source={images[vehicle.picture]} style={styles.picture} resizeMode="contain" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(VehiclesListItem);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    justifyContent: 'space-between',
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
  },
  contentContainer: {
    width: '50%',
    margin: 4,
    backgroundColor: '#F8F8F8',
    padding: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E4E2E2',
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 26,
    height: 26,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerRed: {
    backgroundColor: '#C33D4B',
    borderRadius: 4,
  },
  pictureWrapper: {
    position: 'relative',
  },
  picture: {
    width: 170,
    height: 130,
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 3,
  },
});
