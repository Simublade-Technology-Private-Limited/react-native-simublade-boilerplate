/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextProps} from 'react-native';
import {COLORS} from '../utils/constants/colors';
import {FONT_CONSTANTS} from '../utils/constants/fonts';

export const AppText = ({style, ...props}: Readonly<TextProps>) => {
  return (
    <Text
      style={[
        {
          color: COLORS.text_color,
          fontFamily: FONT_CONSTANTS.primary_regular_font,
          fontSize: 14,
          lineHeight: 19,
        },
        style,
      ]}
      {...props}
      allowFontScaling={false}>
      {props.children}
    </Text>
  );
};
