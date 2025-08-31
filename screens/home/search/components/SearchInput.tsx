import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { getStyles } from '../styles/styles';

interface Props extends Omit<TextInputProps, 'style'> {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchInput({ value, onChangeText, ...rest }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const styles = getStyles(scheme);

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      placeholder="Search Pokemon"
      placeholderTextColor={styles.input.color as string}
      returnKeyType="search"
      {...rest}
    />
  );
}
