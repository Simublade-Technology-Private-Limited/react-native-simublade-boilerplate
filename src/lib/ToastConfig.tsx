import Toast, {ToastShowParams} from 'react-native-toast-message';
import React from 'react';
import {ToastType} from './toast/collection';
import {ToastCard} from './toast/ToastCard';

/*
  1. Create the config
*/
export const toastConfig = {
  default: (props: ToastShowParams) => (
    <ToastCard
      {...props}
      type={props.props.type}
      onClose={props.onPress}
      message={props.text1}
      title={props.text2}
    />
  ),
};

export const showToast = (
  message: string,
  type: ToastType = ToastType.SUCCESS,
  title: string = '',
  callBack?: () => void,
) => {
  Toast.show({
    autoHide: true,
    text1: message,
    text2: title,
    type: ToastType.DEFAULT,
    visibilityTime: 5000,
    onPress: () => {
      callBack?.();
      Toast.hide();
    },
    props: {
      type: type,
      onClose: () => Toast.hide(),
    },
    topOffset: 0,
  });
};
