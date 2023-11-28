import {elevationShadowStyle} from './../../utils/globalFunctions';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/colors';
import {FONT_CONSTANTS, FONT_SIZE_CONSTANTS} from '../../utils/constants/fonts';

export const styles = StyleSheet.create({
  solidButtonContainer: {
    width: '100%',
    height: 56,
    padding: 16,
    backgroundColor: COLORS.white_color,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    ...elevationShadowStyle(4),
  },

  solidButtonText: {
    fontSize: FONT_SIZE_CONSTANTS.heading_size,
    lineHeight: 16,
    fontFamily: FONT_CONSTANTS.primary_medium_font,
    color: COLORS.bright_blue,
  },

  outlinedButtonContainer: {
    width: '100%',
    height: 56,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.black_rgba(0.4),
  },

  outlinedButtonText: {
    fontSize: FONT_SIZE_CONSTANTS.heading_size,
    lineHeight: 16,
    fontFamily: FONT_CONSTANTS.primary_medium_font,
    color: COLORS.bright_blue,
  },

  gradientButtonContainer: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    ...elevationShadowStyle(4),
  },

  gradientButtonInnerContainer: {
    width: '100%',
    height: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
