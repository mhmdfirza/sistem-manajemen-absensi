import * as Notifications from 'expo-notifications';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,      // Triggers the banner
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,     // Explicitly show banner
    shouldShowList: true,
  }),
});