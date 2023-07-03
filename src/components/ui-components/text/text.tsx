import { Text as RNText, StyleProp, TextStyle } from 'react-native';
import { TextSizes, FontWeights, TextColors } from '../../shared-values';

interface TextProps {
  children: string
  size?: keyof typeof TextSizes
  fontWeight?: keyof typeof FontWeights
  color?: keyof typeof TextColors
  textStyle?: StyleProp<TextStyle>
}

function Text({
  children,
  size = 'medium',
  fontWeight = 'regular',
  color = 'black',
  textStyle,
}: TextProps) {
  return (
    <RNText
      style={[
        {
          fontSize: TextSizes[size],
          fontWeight: FontWeights[fontWeight],
          color: TextColors[color],
        },
        textStyle,
      ]}
    >
      {children}
    </RNText>
  );
}

export default Text;
