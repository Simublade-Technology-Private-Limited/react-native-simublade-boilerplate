import {ACTION_CONSTANTS} from '../utils/constants/actionConstants';
import {APP_CONSTANTS} from '../utils/constants/appConstants';

export const actionCreators = {
  showLoader: {
    [ACTION_CONSTANTS.TYPE]: ACTION_CONSTANTS.SHOW_LOADER,
    [APP_CONSTANTS.enable_loader]: true,
  },

  hideLoader: {
    [ACTION_CONSTANTS.TYPE]: ACTION_CONSTANTS.HIDE_LOADER,
    [APP_CONSTANTS.enable_loader]: false,
  },

  loginSuccess: function (userData: any, tokenData: any) {
    return {
      [ACTION_CONSTANTS.TYPE]: ACTION_CONSTANTS.LOGIN_SUCCESS,
      [APP_CONSTANTS.user_data]: userData,
      [APP_CONSTANTS.token_data]: tokenData,
    };
  },

  logoutSuccess: {
    [ACTION_CONSTANTS.TYPE]: ACTION_CONSTANTS.LOGOUT_SUCCESS,
  },

  fetchedUserDetail: function (userData?: any) {
    return {
      [ACTION_CONSTANTS.TYPE]: ACTION_CONSTANTS.UPDATE_USER,
      [APP_CONSTANTS.user_data]: userData,
    };
  },

  updatePersistedData: function (payload: any) {
    return {
      [ACTION_CONSTANTS.TYPE]: ACTION_CONSTANTS.UPDATE_PERSISTED_DATA,
      payload,
    };
  },
};
