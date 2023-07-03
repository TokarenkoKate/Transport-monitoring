import { ReactNode } from 'react';
import { TouchableOpacity, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Text from 'components/ui-components/text/text';
import { TextColors } from '../../../shared-values';

interface ButtonProps {
  title: string;
  onPress: () => void;
  leftIcon?: ReactNode;
  fontColor?: keyof typeof TextColors;
  style?: StyleProp<ViewStyle>;
}

function Button({ title, onPress, leftIcon, fontColor = 'white', style }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.contentGroup}>
        {leftIcon && leftIcon}
        <Text size="large" fontWeight="bold" color={fontColor} textStyle={styles.buttonText}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#464646',
  },
  contentGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
});
