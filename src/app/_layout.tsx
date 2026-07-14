<<<<<<< HEAD
import { Stack } from "expo-router";
=======
import * as Notifications from 'expo-notifications';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';
>>>>>>> origin

export default function RootLayout() {
  return <Stack />;
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