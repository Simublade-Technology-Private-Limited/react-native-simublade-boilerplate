import {Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';

const primary_font = 'Raleway-';

export const FONT_CONSTANTS = {
  primary_regular_font: `${primary_font}Regular`,
  primary_medium_font: `${primary_font}Medium`,
  primary_semi_bold_font: `${primary_font}SemiBold`,
  primary_bold_font: `${primary_font}Bold`,
};

export const FONT_SIZE_CONSTANTS = {
  title_size: 24,
  subtitle_size: 18,
  header_title_size: 28,
  form_title_size: 24,
  form_sub_title_size: 20,
  input_title_size: 18,
  input_content_size: 16,
  app_version_size: 12,
  toast_text: 20,
  heading_size: 14,
};
