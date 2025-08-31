import { ThemedText } from '@/components/typography/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import { getStyles } from './styles/styles';

import SearchInput from './components/SearchInput';

interface SearchSectionProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchSection = ({ value, onChangeText }: SearchSectionProps) => {
  const scheme = useColorScheme() ?? 'light';
  const styles = getStyles(scheme);

  return (
    <View>
      <ThemedText
        size="large"
        weight="bold"
        style={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 }}
      >
        Search Pokemon
      </ThemedText>
      <View style={styles.searchContainer}>
        <SearchInput value={value} onChangeText={onChangeText} />
      </View>
    </View>
  );
};
