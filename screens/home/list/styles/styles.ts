import { Colors } from '@/constants/color';
import { StyleSheet } from 'react-native';

export const getStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {},
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      gap: 12,
    },
    thumb: {
      width: 72,
      height: 72,
      borderRadius: 10,
      backgroundColor: Colors[theme].card,
    },
    content: {
      flex: 1,
      minHeight: 72,
      justifyContent: 'space-between',
    },
    title: {
      color: Colors[theme].text,
      fontSize: 16,
      fontWeight: '700',
    },
    subtitle: {
      color: Colors[theme].text,
      fontSize: 16,
      fontWeight: '700',
    },
    date: {
      color: Colors[theme].icon,
      fontSize: 13,
      fontWeight: '500',
    },
  });
