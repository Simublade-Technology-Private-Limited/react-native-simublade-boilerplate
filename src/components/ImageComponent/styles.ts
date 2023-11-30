import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  snapWrapper: {
    alignItems: 'center',
    zIndex: 1,
    width: 100,
    height: 100,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white_color,
  },

  indicatorWrap: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 10,
  },

  indicator: {
    width: 30,
    height: 30,
  },
});
