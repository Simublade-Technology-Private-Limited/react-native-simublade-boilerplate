import {StyleSheet} from 'react-native';
import {COLORS} from './constants/colors';
import {DIMENSION_CONSTANT} from './constants/dimensConstant';

export const globalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex1WithBackground: {
    flex: 1,
    backgroundColor: COLORS.primary_background_color,
  },
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: COLORS.primary_background_color,
    paddingBottom: DIMENSION_CONSTANT.standard.padding_bottom,
  },
});
