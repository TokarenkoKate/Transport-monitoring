import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useIntl } from 'react-intl';
import { MainStackParamList } from 'types/navigation';
import { Vehicle } from 'types/vehicles';
import { getFullName, getVehicleTitle } from 'utils/vehicle-utils';
import Button from 'components/ui-components/buttons/button/button';
import Icon from 'components/ui-components/icon/icon';
import Text from 'components/ui-components/text/text';
import { images } from 'assets/images';

interface VehicleCardForGeneralMap {
  vehicle: Vehicle;
  cardWidth: number;
}

function VehicleCardForGeneralMap({ vehicle, cardWidth }: VehicleCardForGeneralMap) {
  const { formatMessage: f } = useIntl();
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const navigateToVehicleDescriptionScreen = () => {
    navigation.navigate('VehicleDescriptionScreen', { vehicle });
  };

  const vehicleTitle = getVehicleTitle(vehicle.title);
  const driverFullName = getFullName(vehicle.driver.firstName, vehicle.driver.lastName);

  return (
    <View style={[styles.container, { width: cardWidth }]}>
      {/*--- Image Group ---*/}
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={images[vehicle.picture]} />
        <View style={styles.cagetoryWrapper}>
          <Text size="small" color="white" fontWeight="semiBold">
            {f({ id: 'mapgen_' + vehicle.category })}
          </Text>
        </View>
      </View>

      {/* Content group */}
      <View style={styles.contentGroup}>
        <Text size="large" fontWeight="bold" color="black" textStyle={styles.title}>
          {vehicleTitle}
        </Text>
        <View style={styles.horizontalLine} />
        <View style={styles.driverNameGroup}>
          <Icon size="small" variant="driver" color="black" />
          <Text size="medium" color="black">
            {driverFullName}
          </Text>
        </View>
        <Button
          title={f({ id: 'mapgen_see_details' })}
          onPress={navigateToVehicleDescriptionScreen}
          fontColor="white"
          style={styles.button}
        />
      </View>
    </View>
  );
}

export default React.memo(VehicleCardForGeneralMap);

const styles = StyleSheet.create({
  container: {
    height: 130,
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#F4F4F4',
    borderRadius: 16,
  },
  imageWrapper: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    elevation: 1,
  },
  image: {
    width: 140,
    height: 110,
  },
  cagetoryWrapper: {
    position: 'absolute',
    top: 5,
    left: 5,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 6,
    borderRadius: 5,
    backgroundColor: '#C33D4B',
  },
  contentGroup: {
    flex: 1,
    paddingRight: 4,
  },
  title: {
    marginBottom: 4,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#E1E1E1',
    marginBottom: 12,
  },
  driverNameGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  button: {
    height: 32,
    backgroundColor: '#464646',
    marginTop: 'auto',
  },
});
