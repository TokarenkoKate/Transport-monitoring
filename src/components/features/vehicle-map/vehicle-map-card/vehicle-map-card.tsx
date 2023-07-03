import { Image, StyleSheet, View } from 'react-native';
import { useIntl } from 'react-intl';
import { makePhoneCall, sendMessageToWhatsApp } from 'utils/communication-utils';
import { getFullName, getVehicleTitle } from 'utils/vehicle-utils';
import { Vehicle } from 'types/vehicles';
import { images } from '../../../../assets/images/index';
import Button from 'components/ui-components/buttons/button/button';
import Icon from 'components/ui-components/icon/icon';
import Text from 'components/ui-components/text/text';

function VehicleMapCard({ vehicle }: { vehicle: Vehicle }) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage: f } = useIntl();
  const vehicleTitle = getVehicleTitle(vehicle.title);
  const driverFullName = getFullName(vehicle.driver.firstName, vehicle.driver.lastName);

  const callDriver = () => {
    makePhoneCall(vehicle.driver.phoneNumber, f({ id: 'vehicle_invalid_number' }));
  };

  const sendMessageToDriver = () => {
    sendMessageToWhatsApp(
      vehicle.driver.phoneNumber,
      f({ id: 'vehicle_whatsapp_message' }),
      f({ id: 'vehicle_install_whatsapp' }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={images[vehicle.picture]} style={styles.image} resizeMode="contain" />
      </View>

      {/*--- Content with details ---*/}
      <View style={styles.contentGroup}>
        {/*--- Title with category row ---*/}
        <View style={styles.titleRow}>
          <Text size="2extraLarge" fontWeight="bold">
            {vehicleTitle}
          </Text>
          <View style={styles.categoryWrapper}>
            <Text size="medium" fontWeight="bold" color="white">
              {f({ id: 'vehicle_' + vehicle.category })}
            </Text>
          </View>
        </View>

        <View style={styles.contentRow}>
          <View>
            <View>
              <Text size="extraLarge" color="black" fontWeight="bold">
                {driverFullName}
              </Text>
              <Text>{f({ id: 'vehicle_driver_name' })}</Text>
            </View>
            <View>
              <Text size="extraLarge" color="black" fontWeight="bold">
                {vehicle.driver.phoneNumber}
              </Text>
              <Text>{f({ id: 'vehicle_driver_number' })}</Text>
            </View>
          </View>
          <Image source={images[vehicle.driver.avatar]} style={styles.avatar} />
        </View>
      </View>

      {/*--- Buttons group ---*/}
      <View style={styles.buttonsWrapper}>
        <Button
          title={f({ id: 'vehicle_send_message' })}
          onPress={sendMessageToDriver}
          leftIcon={<Icon variant="whatsapp" color="white" size="semiLarge" />}
          style={styles.whatsappButton}
        />
        <Button
          title={f({ id: 'vehicle_call_driver' })}
          onPress={callDriver}
          leftIcon={<Icon variant="call" color="white" size="semiLarge" />}
          style={styles.callButton}
        />
      </View>
    </View>
  );
}

export default VehicleMapCard;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F8F8F8',
    borderTopRightRadius: 23,
    borderTopLeftRadius: 23,
    paddingHorizontal: 20,
  },
  imageWrapper: {
    position: 'relative',
    height: 50,
  },
  image: {
    width: '100%',
    height: 160,
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C33D4B',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  contentGroup: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    gap: 10,
    backgroundColor: '#F4F4F4',
    elevation: 2,
    borderRadius: 12,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 6,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    flex: 1,
  },
  callButton: {
    backgroundColor: '#464646',
    flex: 1,
  },
});
