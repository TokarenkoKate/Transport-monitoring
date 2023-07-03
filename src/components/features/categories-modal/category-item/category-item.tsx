import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { VehicleCategory } from 'constants/vehicle-const';
import Icon from 'components/ui-components/icon/icon';
import Text from 'components/ui-components/text/text';
import { useIntl } from 'react-intl';

interface CategoryItemProps {
  title: VehicleCategory;
  categorySelected: boolean;
  onPressSelectCategory: (category: VehicleCategory) => void;
}

function CategoryItem({ title, categorySelected, onPressSelectCategory }: CategoryItemProps) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage: f } = useIntl();
  const handleSelect = () => {
    onPressSelectCategory(title);
  };

  return (
    <TouchableOpacity onPress={handleSelect}>
      <View style={[styles.container, categorySelected && styles.containerActive]}>
        <Icon variant={title} size="large" color={categorySelected ? 'white' : 'black'} />
        <Text size="medium" color={categorySelected ? 'white' : 'black'} fontWeight="semiBold">
          {f({ id: 'list_' + title }).toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 82,
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333232',
  },
  containerActive: {
    backgroundColor: '#333232',
  },
});
