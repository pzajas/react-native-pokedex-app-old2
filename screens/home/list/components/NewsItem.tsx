import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Text, View } from 'react-native';
import { getStyles } from '../styles/styles';

export const NewsItem = () => {
  const scheme = useColorScheme() ?? 'light';
  const styles = getStyles(scheme);

  return (
    <View style={styles.row}>
      <View style={styles.thumb} />
      <View style={styles.content}>
        <View style={{ gap: 0 }}>
          <Text style={styles.title}>Pokémon Rumble Rush</Text>
          <Text style={styles.subtitle}>Arrives Soon</Text>
        </View>
        <Text style={styles.date}>15 May 2019</Text>
      </View>
    </View>
  );
};
