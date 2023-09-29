import React from 'react';
import {View, ViewStyle} from 'react-native';
import {styles} from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface HeaderProps {
  containerStyle?: ViewStyle;
}

const Header = (props: HeaderProps) => {
  const {top} = useSafeAreaInsets();
  const {containerStyle} = props;

  return (
    <View
      style={[styles.containerStyle, {marginTop: top}, containerStyle]}></View>
  );
};

export default Header;
