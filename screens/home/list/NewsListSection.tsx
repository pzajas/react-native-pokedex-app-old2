import { ThemedText } from '@/components/typography/ThemedText';
import { useMemo } from 'react';
import { FlatList } from 'react-native';
import { NewsItem } from './components/NewsItem';

export const NewsListSection = () => {
  const data = useMemo(() => Array.from({ length: 8 }, (_, i) => i + 1), []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.toString()}
      scrollEnabled={false}
      ListHeaderComponent={() => (
        <ThemedText
          size="large"
          weight="bold"
          style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 8 }}
        >
          Pokemon News
        </ThemedText>
      )}
      renderItem={() => <NewsItem />}
      contentContainerStyle={{ paddingBottom: 8 }}
    />
  );
};
