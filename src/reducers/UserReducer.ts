import {createReducer} from '../store/utils';
import {ACTION_CONSTANTS} from '../utils/constants/actionConstants';
import {API_CONSTANTS} from '../utils/constants/apiConstants';
import {APP_CONSTANTS} from '../utils/constants/appConstants';
import {clearData, setUserAndAuthData} from '../utils/storageUtils';

const initialState = {
  [APP_CONSTANTS.user_data]: {},
  [APP_CONSTANTS.token_data]: {},
  // [APP_CONSTANTS.fcm_data]: null,
};

export default createReducer(initialState, {
  [ACTION_CONSTANTS.LOGIN_SUCCESS](state: any, action: any) {
    let tokenData = action?.[APP_CONSTANTS.token_data];
    let userData = action?.[APP_CONSTANTS.user_data];
    setUserAndAuthData({[APP_CONSTANTS.data]: userData, ...tokenData});

    return {
      ...state,
      [APP_CONSTANTS.user_data]: userData,
      [APP_CONSTANTS.token_data]: tokenData,
    };
  },

  [ACTION_CONSTANTS.LOGOUT_SUCCESS]() {
    clearData();
    return initialState;
  },

  [ACTION_CONSTANTS.UPDATE_USER](state: any, action: any) {
    let userData = action?.[APP_CONSTANTS.user_data];

    if (userData) {
      setUserAndAuthData({[APP_CONSTANTS.user_data]: userData});
    }

    return {
      ...state,
      [APP_CONSTANTS.user_data]: userData,
    };
  },

  [ACTION_CONSTANTS.UPDATE_PERSISTED_DATA](state: any, action: any) {
    const tokenData = {
      access: action.payload[API_CONSTANTS.access_token_key],
      refresh: action.payload[API_CONSTANTS.refresh_token_key],
    };

    return {
      ...state,
      [APP_CONSTANTS.user_data]: action.payload[APP_CONSTANTS.data],
      [APP_CONSTANTS.token_data]: tokenData,
    };
  },
});
