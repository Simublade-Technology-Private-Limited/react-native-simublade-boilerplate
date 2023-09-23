import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../utils/constants/colors';

/**
 *
 * @param props
 *
 * @param color : Loader Color
 */

export const AppActivityIndicator = ({color = COLORS.primary_theme}: any) => {
  return <ActivityIndicator animating size="large" color={color} />;
};
