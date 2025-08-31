import { Colors } from '@/constants/color';
import { StyleSheet } from 'react-native';

export const getStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    grid: {
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom: 8,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      rowGap: 12,
    },
    tile: {
      width: '48%',
      height: 90,
      borderRadius: 12,
      backgroundColor: Colors[theme].card,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tileText: {
      color: Colors[theme].text,
      fontSize: 16,
      fontWeight: '600',
    },
  });
