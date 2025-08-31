import { Colors } from '@/constants/color';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';

export type ThemedTextSize = 'small' | 'medium' | 'large';
export type ThemedTextWeight = 'regular' | 'medium' | 'bold';
export type ThemedTextColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

const SIZE_TO_FONT: Record<ThemedTextSize, number> = {
  small: 14,
  medium: 16,
  large: 20,
};

const WEIGHT_TO_FONT_WEIGHT: Record<ThemedTextWeight, NonNullable<TextStyle['fontWeight']>> = {
  regular: '400',
  medium: '500',
  bold: '700',
};

export interface ThemedTextProps extends Omit<TextProps, 'style' | 'children'> {
  children: React.ReactNode;
  size?: ThemedTextSize;
  weight?: ThemedTextWeight;
  color?: ThemedTextColorName;
  fontFamily?: string;
  style?: StyleProp<TextStyle>;
}

export const ThemedText = ({
  children,
  size = 'medium',
  weight = 'regular',
  color = 'text',
  fontFamily = 'Montserrat',
  style,
  ...rest
}: ThemedTextProps) => {
  const themeColor = useThemeColor({}, color);

  return (
    <Text
      {...rest}
      style={[
        {
          color: themeColor,
          fontSize: SIZE_TO_FONT[size],
          fontWeight: WEIGHT_TO_FONT_WEIGHT[weight],
          fontFamily,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
