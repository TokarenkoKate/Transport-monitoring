import { StyleSheet, View } from 'react-native';
import Icon from 'components/ui-components/icon/icon';

interface TabIconProps {
  iconVariant: string;
  focused: boolean;
}

function TabIcon({ iconVariant, focused }: TabIconProps) {
  return (
    <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
      <Icon variant={iconVariant} size="semiLarge" color={focused ? 'white' : 'black'} />
    </View>
  );
}

export default TabIcon;

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  iconContainerFocused: {
    backgroundColor: '#C33D4B',
  },
});
