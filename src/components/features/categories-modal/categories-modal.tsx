import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { clearCategories, setCategories } from 'store/vehicles/vehicles';
import { getCategories } from 'store/vehicles/selectors';
import { useIntl } from 'react-intl';
import { CategoriesProps } from 'types/state';
import { VehicleCategory } from 'constants/vehicle-const';
import CategoryItem from './category-item/category-item';
import BottomModal from 'components/ui-components/bottom-modal/bottom-modal';
import Button from 'components/ui-components/buttons/button/button';
import Text from 'components/ui-components/text/text';

interface CagetoriesModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
}

function CategoriesModal({ isModalVisible, closeModal }: CagetoriesModalProps) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage: f } = useIntl();
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);

  const [currentCategories, setCurrentCategories] = useState<CategoriesProps>(categories);
  const [areCategoriesChanged, setCategoriesChanged] = useState<boolean>(false);

  // function that is passed to each category to toggle active category state;
  const handleSelectCategories = (category: VehicleCategory) => {
    setCurrentCategories({
      ...currentCategories,
      [category]: !currentCategories[category],
    });
  };

  // function passed to Confirm button
  // if categories changed, then update store and close modal, otherwise, just close the modal;
  const handleConfirmCategories = () => {
    if (!areCategoriesChanged) {
      closeModal();
      setCategoriesChanged(false);
    } else {
      dispatch(setCategories(currentCategories));
      closeModal();
      setCategoriesChanged(false);
    }
  };

  // function passed to Reset button to reset categories in the store and in the component;
  const handleResetCategories = () => {
    dispatch(clearCategories());
    setCurrentCategories({
      [VehicleCategory.Passenger]: false,
      [VehicleCategory.Construction]: false,
      [VehicleCategory.Truck]: false,
    });
  };

  // function passed to the modal, triggered if the user swipped modal
  // and hasn't confirmed or reset the values;
  const closeModalAndResetValues = () => {
    closeModal();
    setCurrentCategories(categories);
    setCategoriesChanged(false);
  };

  // check if current selected categories are different from previous categories values,
  // that are kept in the store;
  // if changed, then Reset button will be visible;
  useEffect(() => {
    if (
      currentCategories.construction !== categories.construction ||
      currentCategories.passenger !== categories.passenger ||
      currentCategories.truck !== categories.truck
    ) {
      setCategoriesChanged(true);
    } else {
      setCategoriesChanged(false);
    }
  }, [currentCategories]);

  return (
    <BottomModal isModalVisible={isModalVisible} closeModal={closeModalAndResetValues}>
      {/*--- Titles ---*/}
      <View style={{ marginBottom: 14, paddingHorizontal: 22 }}>
        <Text size="2extraLarge" fontWeight="bold">
          {f({ id: 'list_select_category' })}
        </Text>
        <Text size="large" color="gray">
          {f({ id: 'list_select_some' })}
        </Text>
      </View>

      {/*--- List of Categories ---*/}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          gap: 10,
          marginBottom: 28,
          paddingHorizontal: 14,
        }}
        data={Object.entries(currentCategories)}
        renderItem={({ item }) => (
          <CategoryItem
            title={item[0] as VehicleCategory}
            categorySelected={item[1]}
            onPressSelectCategory={handleSelectCategories}
          />
        )}
      />

      {/*--- Reset and Confirm Buttons ---*/}
      <View style={styles.buttonsContainer}>
        {areCategoriesChanged && (
          <Button
            title={f({ id: 'list_reset' })}
            onPress={handleResetCategories}
            fontColor="black"
            style={styles.resetButton}
          />
        )}
        <Button
          title={f({ id: 'list_confirm' })}
          onPress={handleConfirmCategories}
          style={[styles.confirmButton, areCategoriesChanged && { width: '40%' }]}
        />
      </View>
    </BottomModal>
  );
}

export default CategoriesModal;

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: '#C33D4B',
    width: '100%',
    flex: 1,
  },
  resetButton: {
    backgroundColor: '#F4F4F4',
    width: '100%',
    flex: 1,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 22,
    gap: 10,
  },
});
