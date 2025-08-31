import { ThemedText } from '@/components/typography/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter, type Href } from 'expo-router';
import { View } from 'react-native';
import Tile from './components/Tile';
import { getStyles } from './styles/styles';

const TILES = ['Pokedex', 'Characters', 'Locations', 'Items', 'Moves', 'Abilities'] as const;

export const TilesSection = () => {
  const router = useRouter();
  const scheme = useColorScheme() ?? 'light';
  const styles = getStyles(scheme);

  return (
    <View>
      <ThemedText
        size="large"
        weight="bold"
        style={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 }}
      >
        Explore Pokemon
      </ThemedText>
      <View style={styles.grid}>
        {TILES.map((label) => (
          <Tile
            key={label}
            label={label}
            onPress={label === 'Pokedex' ? () => router.push('/pokedex' as Href) : undefined}
          />
        ))}
      </View>
    </View>
  );
};
