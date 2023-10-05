import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultOptions, navigationRef} from './service';
import {RootStackScreens} from './types';
import {NAVIGATION_CONSTANTS} from '../utils/constants/navigationConstants';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAndAuthData} from '../utils/storageUtils';
import {actionCreators} from '../actions/actionCreators';
import AuthorisedStack from './stacks/AuthorisedStack';
import UnAuthorisedStack from './stacks/UnAuthorisedStack';

const Stack = createNativeStackNavigator<RootStackScreens>();

const RootStackScreen = () => {
  let showRenderNavigation: boolean = true; //This variable is defined so that we can stop rendering navigation if we have not got values from async store

  const dispatch = useDispatch();

  const accessToken = useSelector(
    (state: any) => state?.UserReducer?.token?.access || null,
  );

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      let storedData = await getUserAndAuthData();
      dispatch(actionCreators.updatePersistedData(storedData));
    } catch (error) {
      console.log("Key-chain couldn't be accessed!", error);
    }
  };

  const getNavigationStackName = () => {
    if (!accessToken) {
      return NAVIGATION_CONSTANTS.authorised_stack;
    } else {
      return NAVIGATION_CONSTANTS.unauthorised_stack;
    }
  };

  const getNavigationStackComponent = () => {
    return getNavigationStackName() === NAVIGATION_CONSTANTS.authorised_stack
      ? AuthorisedStack
      : UnAuthorisedStack;
  };

  return (
    showRenderNavigation && (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={defaultOptions}>
          <Stack.Screen
            name={getNavigationStackName() as never}
            component={getNavigationStackComponent()}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default RootStackScreen;
