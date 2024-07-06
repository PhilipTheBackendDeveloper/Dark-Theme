import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import DarkMode from './src/app/utils/darkmode.context';
import { useEffect, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [useDeviceSettings, setUseDeviceSettings] = useState(false);



  const scheme = useColorScheme(); 
  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: 'white',
      background: '#202120',
      card: '#121212',
    },
  };

  useEffect(() => {
    let subscription: any;

    if (useDeviceSettings) {
      subscription = Appearance.addChangeListener((scheme) => {
   
        setIsDarkMode(scheme.colorScheme === 'dark');
      });
    }

    // cleanup
    return () => {
      if (subscription) {
        subscription.remove();
        subscription = null;
      }
    };
  }, [scheme, isDarkMode, useDeviceSettings]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <DarkMode.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        useDeviceSettings,
        setUseDeviceSettings,
      }}
    >
      <NavigationContainer theme={isDarkMode ? CustomDarkTheme : DefaultTheme}>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
        <StackNavigator />
      </NavigationContainer>
    </DarkMode.Provider>
  );
}
