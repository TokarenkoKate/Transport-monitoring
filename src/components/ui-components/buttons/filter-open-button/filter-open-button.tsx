import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'components/ui-components/icon/icon';

interface FilterOpenButtonProps {
  onPressOpenModal: () => void;
}

function FilterOpenButton({ onPressOpenModal }: FilterOpenButtonProps) {
  return (
    <TouchableOpacity onPress={onPressOpenModal}>
      <View style={styles.filterIconContainer}>
        <Icon variant="filter" size="semiLarge" color="white" />
      </View>
    </TouchableOpacity>
  );
}

export default FilterOpenButton;

const styles = StyleSheet.create({
  filterIconContainer: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#C33D4B',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
