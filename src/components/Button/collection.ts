import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export enum ButtonType {
  SOLID = 'SOLID',
  OUTLINE = 'OUTLINE',
  CLEAR = 'CLEAR',
  GRADIENT = 'GRADIENT',
}

export interface ButtonProps {
  type?: ButtonType;
  buttonTitle?: string;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  gradientButtonColor?: Array<string>;
  onPressHandler: () => void;
}