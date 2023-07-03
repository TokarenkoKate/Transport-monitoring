import Icon from 'components/ui-components/icon/icon';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface BackButtonProps {
  onPressGoBack: () => void;
  style?: StyleProp<ViewStyle>;
}

function BackButton({ onPressGoBack, style }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={onPressGoBack} style={[styles.button, style]}>
      <Icon variant="back" size="medium" color="white" />
    </TouchableOpacity>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 37,
    height: 37,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000009C',
  },
});
