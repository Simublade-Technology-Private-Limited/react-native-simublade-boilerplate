import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const DIMENSION_CONSTANT = {
  standard: {
    padding: 10,
    margin_vertical: 10,
    margin_horizontal: 24,
    padding_horizontal: 20,
    margin_secondary: 20,
  },

  // Header
  header_height: 64,

  // Toast
  toast_min_height: 40,
  toast_max_height: 140,
};
