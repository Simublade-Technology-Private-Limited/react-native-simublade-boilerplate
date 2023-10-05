import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {isAndroid} from '../utils/globalFunctions';

const KeyboardAvoidView = ({style, children}) => {
  const VIEW = isAndroid() ? View : KeyboardAvoidingView;
  const props: any = isAndroid() ? {} : {behavior: 'padding'};
  return (
    <VIEW {...props} style={style}>
      {children}
    </VIEW>
  );
};

export default KeyboardAvoidView;
