import React from 'react';
import {Animated, Image, Pressable, StyleSheet, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {IMAGES} from '../../utils/constants/assets';
import {COLORS} from '../../utils/constants/colors';
import {DIMENSION_CONSTANT} from '../../utils/constants/dimensConstant';
import {FONT_CONSTANTS} from '../../utils/constants/fonts';
import {hasNotch} from '../../utils/globalFunctions';
import {
  AppToastProps,
  ToastBorderColorType,
  ToastColorType,
  ToastType,
} from './collection';

export const ToastCard = ({
  containerStyle = {},
  textStyle = {},
  message,
  onClose = () => {},
  type,
  title,
}: AppToastProps) => {
  const getToastBackgroundColor = () => {
    switch (type) {
      case ToastType.ERROR:
        return ToastColorType.ERROR;
      case ToastType.SUCCESS:
        return ToastColorType.SUCCESS;
      case ToastType.INFO:
        return ToastColorType.INFO;
      default:
        return ToastColorType.DEFAULT;
    }
  };

  const getToastBorderColor = () => {
    switch (type) {
      case ToastType.ERROR:
        return ToastBorderColorType.ERROR;
      case ToastType.SUCCESS:
        return ToastBorderColorType.SUCCESS;
      case ToastType.INFO:
        return ToastBorderColorType.INFO;
      default:
        return ToastBorderColorType.DEFAULT;
    }
  };

  const getIcon = () => {
    switch (type) {
      case ToastType.ERROR:
        return IMAGES.error;
      case ToastType.SUCCESS:
        return IMAGES.success;
    }
  };

  return (
    <Animated.View
      style={[
        styles.toastContainerStyle,
        {
          backgroundColor: getToastBackgroundColor(),
          borderColor: getToastBorderColor(),
        },
        containerStyle,
      ]}>
      <Pressable style={styles.textContainerStyle}>
        <Image source={getIcon()} />
        <View style={{flex: 1}}>
          {title && (
            <View style={{flexDirection: 'row'}}>
              <AppText numberOfLines={3} style={[styles.titleStyle]}>
                {title}
              </AppText>
            </View>
          )}
          <View style={{flexDirection: 'row'}}>
            <AppText numberOfLines={3} style={[styles.textStyle, textStyle]}>
              {message}
            </AppText>
          </View>
        </View>
        <Pressable onPress={onClose} style={styles.closeIconStyle}>
          <Image source={IMAGES.close_icon} />
        </Pressable>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: FONT_CONSTANTS.primary_regular_font,
    color: COLORS.white_color,
    fontSize: 12,
    flex: 1,
    marginLeft: 10,
    alignSelf: 'flex-end',
  },
  titleStyle: {
    fontFamily: FONT_CONSTANTS.primary_bold_font,
    color: COLORS.white_color,
    fontSize: 13,
    marginLeft: 10,
    lineHeight: 14,
    textTransform: 'capitalize',
  },
  toastContainerStyle: {
    flexDirection: 'row',
    padding: DIMENSION_CONSTANT.standard.padding,
    // borderRadius: 8,
    borderWidth: 0.5,
    height: !hasNotch ? 80 : 118,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -2,
  },
  textContainerStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeIconStyle: {
    marginLeft: 5,
    // alignSelf: 'flex-start',
  },
});
