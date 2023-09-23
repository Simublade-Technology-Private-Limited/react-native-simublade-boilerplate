import {StyleSheet} from 'react-native';

export const COMMON_STYLE = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  RCC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute_max: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  center_content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row_space_between_center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  space_between_center: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex_end_center: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  width_height_100_percent: {
    width: '100%',
    height: '100%',
  },
});
