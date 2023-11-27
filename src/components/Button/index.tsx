import {View, Text} from 'react-native';
import React from 'react';
import {ButtonProps, ButtonType} from './collection';

const Button = (props: ButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {type = ButtonType.SOLID} = props;

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default Button;
