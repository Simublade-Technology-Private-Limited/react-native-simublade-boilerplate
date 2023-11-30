import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import useTimeout from '../hooks/useTimeout';
import Navigation from '../navigation';
import SplashScreen from 'react-native-splash-screen';
import NetworkManager from '../lib/NetworkManager';
import {toastConfig} from '../lib/ToastConfig';
import Toast from 'react-native-toast-message';
import {APP_CONSTANTS} from '../utils/constants/appConstants';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppLoader from '../components/AppLoader';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const AppContainer = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useTimeout(() => {
    SplashScreen.hide();
  }, APP_CONSTANTS.splash_screen_timeout);

  return (
    <SafeAreaProvider>
      <NetworkManager />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <BottomSheetModalProvider>
        <Navigation />
      </BottomSheetModalProvider>
      <Toast config={toastConfig} />
      <AppLoader />
    </SafeAreaProvider>
  );
};

export default AppContainer;
