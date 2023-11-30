import {Dimensions, Linking, Platform} from 'react-native';
import {APP_CONSTANTS} from './constants/appConstants';
import {showToast} from '../lib/ToastConfig';
import {ToastType} from '../lib/toast/collection';
import DeviceInfo from 'react-native-device-info';
import {STRING_CONSTANTS} from './constants/stringConstants';
import {COLORS} from './constants/colors';

export const isAndroid = () => {
  return Platform.OS === APP_CONSTANTS.device_android;
};

export const isIos = () => {
  return Platform.OS === APP_CONSTANTS.device_ios;
};

export const logOnConsole = (...arg: any) => {
  if (__DEV__) {
    console.log(arg);
  }
};

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const hasNotch = DeviceInfo.hasNotch();
export const hasDynamicIsland = DeviceInfo.hasDynamicIsland();

export const objToFormData = (rawData: any) => {
  const formData: FormData = new FormData();
  if (rawData && rawData != null && typeof rawData === 'object') {
    Object.keys(rawData).map((item, _index: number) => {
      formData.append(item, rawData[item]);
    });
  }
  return formData;
};

export const emptyFunction = () => {};

export const isNotEmpty = (data: any) => {
  return (
    data !== null &&
    data !== undefined &&
    data !== '' &&
    typeof data === 'object' &&
    Object.keys(data).length > 1
  );
};

// Error Toast
export const showErrorMessage = (message: any, heading: any = '') => {
  showToast(message, ToastType.ERROR, heading);
};

// Success Toast
export const showSuccessMessage = (message: any, heading: any = '') => {
  showToast(message, ToastType.SUCCESS, heading);
};

export const handleOnPressUrl = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url);
  } else {
    showErrorMessage(`${STRING_CONSTANTS.link_open_error}: ${url}`);
  }
};

// Elevation shadow function
export const elevationShadowStyle = (
  elevation: number,
  shadowColor = COLORS.black,
  offsetWidth = 2,
  offsetHeight = 0.5,
  opacity = 0.6,
) => {
  return {
    elevation,
    shadowColor: shadowColor,
    shadowOffset: {width: offsetWidth, height: offsetHeight || 0.5 * elevation},
    shadowOpacity: opacity,
    shadowRadius: elevation,
  };
};

// Create reducer
export const createReducer = (initialState: any, handlers: any) => {
  return function reducer(state = initialState, action: any) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      logOnConsole(handlers[action.type](state, action));
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

// Getting file extension
export const getExtension = (fileName: string) => {
  return /[.]/.exec(fileName) ? /[^.]+$/.exec(fileName) : undefined;
};

// Capitalize first letter
export const capitalizeFirst = (name: string) => {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
};
