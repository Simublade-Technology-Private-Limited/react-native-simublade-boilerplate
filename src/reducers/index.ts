import {combineReducers} from 'redux';
import UIReducer from '../reducers/UIReducer';
import UserReducer from '../reducers/UserReducer';

export default combineReducers(
  Object.assign({
    UIReducer,
    UserReducer,
  }),
);
