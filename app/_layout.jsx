import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { AuthProvider } from '../context/authContext'; 
import {ProfileProvider} from '../context/profileContext'
 
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    "SF-Pro-Rounded-Black": require('../assets/fonts/SF-Pro-Rounded-Black.otf'),
    "SF-Pro-Rounded-Bold": require('../assets/fonts/SF-Pro-Rounded-Bold.otf'),
    "SF-Pro-Rounded-Heavy": require('../assets/fonts/SF-Pro-Rounded-Heavy.otf'),
    "SF-Pro-Rounded-Light": require('../assets/fonts/SF-Pro-Rounded-Light.otf'),
    "SF-Pro-Rounded-Medium": require('../assets/fonts/SF-Pro-Rounded-Medium.otf'),
    "SF-Pro-Rounded-Regular": require('../assets/fonts/SF-Pro-Rounded-Regular.otf'),
    "SF-Pro-Rounded-Semibold": require('../assets/fonts/SF-Pro-Rounded-Semibold.otf'),
    "SF-Pro-Rounded-Thin": require('../assets/fonts/SF-Pro-Rounded-Thin.otf'),
    "SF-Pro-Rounded-Ultralight": require('../assets/fonts/SF-Pro-Rounded-Ultralight.otf'),
    "SF-Pro": require('../assets/fonts/SF-Pro.ttf'),
    "SF-Pro-Italic": require('../assets/fonts/SF-Pro-Italic.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (

    <AuthProvider>
    <ProfileProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
       <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
    </ProfileProvider>
     
    </AuthProvider>
    
    
  );
}
