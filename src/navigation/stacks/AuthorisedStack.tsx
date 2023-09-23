import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackScreens} from '../types';
import {NAVIGATION_CONSTANTS} from '../../utils/constants/navigationConstants';
import {defaultOptions} from '../service';
import BottomTabBar from '../BottomTabBar';

const Stack = createNativeStackNavigator<RootStackScreens>();

const AuthorisedStack = (props: any) => {
  const initialRouteName = props?.route?.params?.initialRouteName || null;

  return (
    <Stack.Navigator
      screenOptions={defaultOptions}
      initialRouteName={
        initialRouteName || NAVIGATION_CONSTANTS.bottom_tab_bar
      }>
      {/* Screens */}
      <Stack.Screen
        name={NAVIGATION_CONSTANTS.bottom_tab_bar as never}
        component={BottomTabBar}
      />
    </Stack.Navigator>
  );
};

export default AuthorisedStack;
