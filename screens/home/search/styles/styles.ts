import { Colors } from '@/constants/color';
import { StyleSheet } from 'react-native';

export const getStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {},
    searchContainer: {
      paddingHorizontal: 16,
      paddingBottom: 8,
      paddingTop: 12,
    },
    input: {
      height: 44,
      borderRadius: 12,
      paddingHorizontal: 14,
      backgroundColor: Colors[theme].inputBackground,
      color: Colors[theme].text,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: Colors[theme].border,
    },
  });
