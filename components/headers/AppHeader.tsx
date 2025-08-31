import { useThemeColor } from '@/hooks/useThemeColor';
import { HeaderBackButton } from '@react-navigation/elements';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AppHeaderProps {
  title: string;
  showBackButton?: boolean;
  onPressBack?: () => void;
}

export const APP_HEADER_HEIGHT = 56;

export const AppHeader = ({ title, showBackButton, onPressBack }: AppHeaderProps) => {
  const bgColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <SafeAreaView edges={['top']} style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <View style={styles.container}>
        {showBackButton ? (
          <HeaderBackButton tintColor={textColor} onPress={onPressBack} />
        ) : (
          <View style={styles.backButtonPlaceholder} />
        )}
        <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.rightSpacer} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {},
  container: {
    height: APP_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  backButtonPlaceholder: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'left',
    paddingHorizontal: 8,
  },
  rightSpacer: {
    width: 44,
  },
});
