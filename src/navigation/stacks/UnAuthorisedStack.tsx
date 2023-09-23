import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackScreens} from '../types';
import {NAVIGATION_CONSTANTS} from '../../utils/constants/navigationConstants';
import {defaultOptions} from '../service';
import LandingScreen from '../../container/LandingScreen';

const Stack = createNativeStackNavigator<RootStackScreens>();

const UnAuthorisedStack = (props: any) => {
  const initialRouteName = props?.route?.params?.initialRouteName || null;

  return (
    <Stack.Navigator
      screenOptions={defaultOptions}
      initialRouteName={initialRouteName}>
      {/* Screens */}
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.landing_screen as never}
        component={LandingScreen}
      />
    </Stack.Navigator>
  );
};

export default UnAuthorisedStack;
