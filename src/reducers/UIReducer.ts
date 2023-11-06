import {createReducer} from '../store/utils';
import {ACTION_CONSTANTS} from '../utils/constants/actionConstants';
import {APP_CONSTANTS} from '../utils/constants/appConstants';

const initialState = {
  [APP_CONSTANTS.enable_loader]: false,
};

export default createReducer(initialState, {
  [ACTION_CONSTANTS.SHOW_LOADER](state: any, _action: any) {
    return {
      ...state,
      [APP_CONSTANTS.enable_loader]: true,
    };
  },
  [ACTION_CONSTANTS.HIDE_LOADER](state: any, _action: any) {
    return {
      ...state,
      [APP_CONSTANTS.enable_loader]: false,
    };
  },
});
