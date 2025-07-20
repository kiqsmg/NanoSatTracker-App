import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GlobalProvider, useGlobalContext } from '../context/GlobalProvider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function AuthListener() {
  const { setUser, setUserInfo } = useGlobalContext();

  useEffect(() => {
    const setupAuthListener = async () => {
      try {
        const { getAuthInstance } = await import('../lib/firebaseConfig');
        const auth = await getAuthInstance();
        
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
          console.log('Auth state changed:', currentUser ? 'User logged in' : 'User logged out');
          setUser(currentUser);
          
          if (currentUser) {
            setUserInfo({
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
            });
          } else {
            setUserInfo(null);
          }
        });

        return unsubscribe;
      } catch (error) {
        console.error('Auth listener setup error:', error);
      }
    };

    setupAuthListener();
  }, [setUser, setUserInfo]);

  return null;
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <AuthListener />
      <RootLayoutNav />
    </GlobalProvider>
  );
}

function RootLayoutNav() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
