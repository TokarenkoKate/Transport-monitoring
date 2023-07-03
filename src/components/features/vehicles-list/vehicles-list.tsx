import { FlatList, StyleSheet, View } from 'react-native';
import { useIntl } from 'react-intl';
import { Vehicle } from 'types/vehicles';
import Text from 'components/ui-components/text/text';
import VehicleListItem from './vehicle-list-item/vehicle-list-item';

interface VehiclesListProps {
  vehicles: Vehicle[];
}

function VehiclesList({ vehicles }: VehiclesListProps) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage: f } = useIntl();

  return (
    <View>
      {/*--- Titles Group and button to open categories filter ---*/}
      <View style={styles.titlesWrapper}>
        <Text size="extraLarge" fontWeight="semiBold" textStyle={styles.title}>
          {f({ id: 'list_found' })}
        </Text>
        <Text size="medium" color="gray" fontWeight="semiBold" textStyle={styles.subtitle}>
          {f({ id: 'list_vehicles_qty' }, { n: vehicles.length })}
        </Text>
      </View>

      {/*--- List of vehicles  ---*/}
      <FlatList
        contentContainerStyle={{ paddingTop: 26, paddingHorizontal: 14 }}
        data={vehicles}
        scrollEnabled={false}
        keyExtractor={(vehicle) => String(vehicle.title)}
        renderItem={({ item }) => <VehicleListItem vehicle={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default VehiclesList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  titlesWrapper: {
    paddingHorizontal: 14,
  },
  title: {
    marginBottom: 6,
  },
  subtitle: {
    alignSelf: 'flex-start',
  },
  separator: {
    height: 16,
  },
});
