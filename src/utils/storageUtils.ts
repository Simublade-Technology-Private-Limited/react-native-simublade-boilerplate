import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_CONSTANTS} from './constants/apiConstants';
import {APP_CONSTANTS} from './constants/appConstants';

export const getUserAndAuthData: any = async () => {
  const storedData = await AsyncStorage.multiGet([
    APP_CONSTANTS.data,
    APP_CONSTANTS.access_token_key,
    APP_CONSTANTS.refresh_token_key,
  ]);

  const convertedMapData = new Map(storedData);
  const userData: any = convertedMapData.get(APP_CONSTANTS.data);
  const accessToken = convertedMapData.get(API_CONSTANTS.access_token_key);
  const refreshToken = convertedMapData.get(API_CONSTANTS.refresh_token_key);

  const obj: any = {};

  if (userData) {
    obj[APP_CONSTANTS.data] = JSON.parse(userData);
  }
  if (accessToken) {
    obj[API_CONSTANTS.access_token_key] = accessToken;
  }

  if (refreshToken) {
    obj[API_CONSTANTS.refresh_token_key] = refreshToken;
  }
  return obj;
};

export const setUserAndAuthData = (userAuthData: any) => {
  const {data, access, refresh} = userAuthData;

  if (data) {
    if (access) {
      if (refresh) {
        AsyncStorage.multiSet([
          [API_CONSTANTS.user_data_key, JSON.stringify(data)],
          [API_CONSTANTS.access_token_key, access],
          [API_CONSTANTS.refresh_token_key, refresh],
        ]);
      } else {
        AsyncStorage.multiSet([
          [API_CONSTANTS.user_data_key, JSON.stringify(data)],
          [API_CONSTANTS.access_token_key, access],
        ]);
      }
    } else {
      AsyncStorage.multiSet([
        [API_CONSTANTS.user_data_key, JSON.stringify(data)],
      ]);
    }
  } else if (access || refresh) {
    if (access) {
      AsyncStorage.multiSet([[API_CONSTANTS.access_token_key, access]]);
    }
    if (refresh) {
      AsyncStorage.multiSet([[API_CONSTANTS.refresh_token_key, refresh]]);
    }
  }
};

export const clearData = () => {
  AsyncStorage.multiRemove([
    API_CONSTANTS.user_data_key,
    API_CONSTANTS.access_token_key,
    API_CONSTANTS.refresh_token_key,
  ]);
};

export const getAccessToken = async () => {
  const accessToken = await AsyncStorage.getItem(
    API_CONSTANTS.access_token_key,
  );
  return accessToken;
};

export const getRefreshToken = async () => {
  const accessToken = await AsyncStorage.getItem(
    API_CONSTANTS.refresh_token_key,
  );
  return accessToken;
};

export const removeStorageData = (key: any) => {
  AsyncStorage.removeItem(key);
};

export const setStorageData = (key: any, value: any) => {
  AsyncStorage.getItem(key, value);
};

export const getStorageData = async (key: any) => {
  return await AsyncStorage.getItem(key);
};
