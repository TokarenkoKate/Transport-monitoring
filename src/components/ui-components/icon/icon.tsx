import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { StyleProp, TextStyle } from 'react-native';
import { IconSizes, IconFillColors } from '../../shared-values';
import icoMoonConfig from '../../../../selection.json';

const IcoMoonIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf'
);

interface IconProps {
  size?: keyof typeof IconSizes
  color?: keyof typeof IconFillColors
  variant: string
  style?: StyleProp<TextStyle>
}

function Icon({ variant, size = 'medium', color = 'black', style }: IconProps) {
  return (
    <IcoMoonIcon
      name={variant}
      size={IconSizes[size]}
      color={IconFillColors[color]}
      style={style}
    />
  );
}

export default Icon;
