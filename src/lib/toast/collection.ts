import {ViewStyle, TextStyle, ImageStyle} from 'react-native';

export enum ToastType {
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  DEFAULT = 'default',
}

export enum ToastColorType {
  ERROR = '#E65254',
  SUCCESS = '#93CA6E',
  INFO = '#F2F6FF',
  DEFAULT = '#FFFFFF',
}

export enum ToastBorderColorType {
  ERROR = '#DB1E36',
  SUCCESS = '#5EBF8D',
  INFO = '#104FF5',
  DEFAULT = '#ADADAD',
}

export interface AppToastProps {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  duration?: number;
  onClose?: () => void;
  type: ToastType;
  message?: string;
  closeIcon?: object;
  title?: string;
  closeIconStyle?: ImageStyle;
}
