import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NewsListSection } from './list/NewsListSection';
import { SearchSection } from './search/SearchSection';
import { TilesSection } from './tiles/TilesSection';

export default function HomeScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const bottomInset = Platform.OS === 'ios' ? tabBarHeight : 0;
  const [query, setQuery] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: bottomInset }}
        showsVerticalScrollIndicator={false}
      >
        <SearchSection value={query} onChangeText={setQuery} />
        <TilesSection />
        <NewsListSection />
      </ScrollView>
    </SafeAreaView>
  );
}
