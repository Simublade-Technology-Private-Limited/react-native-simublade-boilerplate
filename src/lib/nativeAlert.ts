import {emptyFunction} from './../utils/globalFunctions';
import {Alert} from 'react-native';
import {STRING_CONSTANTS} from '../utils/constants/stringConstants';

export function showAlert(message: string) {
  Alert.alert(
    STRING_CONSTANTS.app_name,
    message,
    [{text: STRING_CONSTANTS.ok_text, onPress: () => {}, style: 'default'}],
    {cancelable: false},
  );
}
export function showAlertDialog(
  title: string,
  message: string,
  buttonTitle: string,
  callback: typeof emptyFunction,
) {
  Alert.alert(
    title,
    message,
    [{text: buttonTitle, onPress: callback?.(), style: 'default'}],
    {cancelable: false},
  );
}
export function showDoubleActionAlertDialog(
  title: string,
  message: string,
  positiveTitle: string,
  positiveCallback: typeof emptyFunction,
  negativeTitle: string,
  negativeCallback: typeof emptyFunction,
) {
  Alert.alert(
    title,
    message,
    [
      {
        text: negativeTitle,
        style: 'cancel',
        onPress: negativeCallback?.(),
      },
      {
        text: positiveTitle,
        style: 'destructive',
        onPress: positiveCallback?.(),
      },
    ],
    {cancelable: false},
  );
}
export function showTripleActionAlertDialog(
  title: string,
  message: string,
  positiveTitle: string,
  positiveCallback: typeof emptyFunction,
  negativeTitle: string,
  negativeCallback: typeof emptyFunction,
  neutralTitle: string,
  neutralCallback: typeof emptyFunction,
) {
  Alert.alert(
    title,
    message,
    [
      {
        text: positiveTitle,
        style: 'default',
        onPress: positiveCallback?.(),
      },
      {
        text: negativeTitle,
        style: 'destructive',
        onPress: negativeCallback?.(),
      },
      {
        text: neutralTitle,
        style: 'cancel',
        onPress: neutralCallback?.(),
      },
    ],
    {cancelable: false},
  );
}
