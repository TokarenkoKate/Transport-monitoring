import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useIntl } from 'react-intl';
import { useAppSelector } from 'hooks/redux';
import { getAllVehicles, getCategories } from 'store/vehicles/selectors';
import { MainStackScreenProps } from 'types/navigation';
import { Vehicle } from 'types/vehicles';
import { filterVehiclesToCategories } from 'utils/vehicle-utils';
import VehiclesList from 'components/features/vehicles-list/vehicles-list';
import CagetoriesModal from 'components/features/categories-modal/categories-modal';
import FilterOpenButton from 'components/ui-components/buttons/filter-open-button/filter-open-button';
import Text from 'components/ui-components/text/text';

function VehiclesListScreen({ navigation }: MainStackScreenProps<'VehiclesListScreen'>) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage: f } = useIntl();
  const allVehicles = useAppSelector(getAllVehicles);
  const categories = useAppSelector(getCategories);

  const [currentVehicles, setCurrentVehicles] = useState<Vehicle[]>(allVehicles);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const navigateToGeneralMap = () => navigation.navigate('MapGeneralScreen');

  // effect trigger after categories change, if no categories or all categories selected,
  // then show all default vehicles, otherwise filter to selected categories;
  useEffect(() => {
    const categoriesToCheck = Object.entries(categories);
    if (
      categoriesToCheck.every((category) => category[1] === true) ||
      categoriesToCheck.every((category) => category[1] === false)
    ) {
      setCurrentVehicles(allVehicles);
    } else {
      const filteredVehicles = filterVehiclesToCategories(allVehicles, categoriesToCheck);
      setCurrentVehicles(filteredVehicles);
    }
  }, [categories]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={false}>
        {/*--- Title section ---*/}
        <View style={styles.titleSection}>
          <View style={styles.titles}>
            <Text
              size="2extraLarge"
              color="white"
              fontWeight="bold"
              textStyle={styles.primaryTitle}
            >
              {f({ id: 'list_title' })}
            </Text>
            <View style={styles.subtitle}>
              <TouchableOpacity onPress={navigateToGeneralMap}>
                <Text size="large" color="white">
                  {f({ id: 'list_see_in_map' })}
                </Text>
              </TouchableOpacity>
              <View style={styles.subtitleLine} />
            </View>
          </View>
          <Pressable onPress={navigateToGeneralMap}>
            <Image style={styles.mapImage} source={require('../assets/images/map_small.jpg')} />
          </Pressable>
        </View>

        {/*--- Content section ---*/}
        <View style={styles.contentSection}>
          <View style={styles.contentTitleRow}>
            <View style={styles.titleWrapper}>
              <Text size="2extraLarge" fontWeight="bold">
                {f({ id: 'list_select_category' })}
              </Text>
            </View>
            <FilterOpenButton onPressOpenModal={handleOpenModal} />
          </View>

          {/*--- List with vehicles ---*/}
          <VehiclesList vehicles={currentVehicles} />
        </View>

        {/*--- Modal with categories ---*/}
        <CagetoriesModal isModalVisible={isModalVisible} closeModal={handleCloseModal} />
      </ScrollView>
    </View>
  );
}

export default VehiclesListScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  titleSection: {
    backgroundColor: '#333232',
    paddingHorizontal: 14,
    paddingVertical: 34,
  },
  titles: {
    marginBottom: 16,
  },
  primaryTitle: {
    marginBottom: 8,
  },
  subtitle: {
    alignSelf: 'flex-start',
  },
  subtitleLine: {
    height: 1,
    backgroundColor: '#FFFFFF',
  },
  mapImage: {
    width: '100%',
    height: 136,
    borderRadius: 10,
  },
  contentSection: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 28,
  },
  contentTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 14,
  },
  titleWrapper: {
    flex: 1,
  },
});
