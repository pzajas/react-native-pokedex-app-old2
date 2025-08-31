import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import { getStyles } from '../styles/styles';

interface TileProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function Tile({ label, onPress }: TileProps) {
  const scheme = useColorScheme() ?? 'light';
  const styles = getStyles(scheme);
  const Container = onPress ? Pressable : View;

  return (
    <Container
      style={styles.tile}
      onPress={onPress}
      accessibilityRole={onPress ? 'button' : undefined}
      accessibilityLabel={label}
    >
      <Text style={styles.tileText}>{label}</Text>
    </Container>
  );
}
