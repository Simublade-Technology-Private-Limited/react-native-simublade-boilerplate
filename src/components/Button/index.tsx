import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonProps, ButtonType} from './collection';
import {AppText} from '../AppText';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {GRADIENT_COLORS} from '../../utils/constants/colors';

/**
 * @param type: Type of button
 *
 * @param buttonTitle: Title of the button to be used. Default value is Done
 *
 * @param buttonContainerStyle: Style for button container
 *
 * @param buttonTextStyle: Style for button text
 *
 * @param gradientButtonColor: Color of the gradient button
 *
 * @param onPressHandler: Callback for onPress handler
 */

const Button = (props: ButtonProps) => {
  const {
    type = ButtonType.SOLID,
    buttonTitle = 'Done',
    buttonContainerStyle,
    buttonTextStyle,
    gradientButtonColor,
    onPressHandler,
  } = props;

  switch (type) {
    case ButtonType.SOLID:
      return (
        <TouchableOpacity
          onPress={onPressHandler}
          activeOpacity={0.8}
          style={[styles.solidButtonContainer, buttonContainerStyle]}>
          <AppText style={[styles.solidButtonText, buttonTextStyle]}>
            {buttonTitle}
          </AppText>
        </TouchableOpacity>
      );
    case ButtonType.OUTLINE:
      return (
        <TouchableOpacity
          onPress={onPressHandler}
          activeOpacity={0.8}
          style={[styles.outlinedButtonContainer, buttonContainerStyle]}>
          <AppText style={[styles.outlinedButtonText, buttonTextStyle]}>
            {buttonTitle}
          </AppText>
        </TouchableOpacity>
      );
    case ButtonType.GRADIENT:
      return (
        <TouchableOpacity
          onPress={onPressHandler}
          activeOpacity={0.8}
          style={[styles.gradientButtonContainer, buttonContainerStyle]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={GRADIENT_COLORS.blue_gradient || gradientButtonColor}
            angle={45}
            angleCenter={{x: 0.5, y: 0.5}}
            style={styles.gradientButtonInnerContainer}>
            <AppText style={[styles.solidButtonText, buttonTextStyle]}>
              {buttonTitle}
            </AppText>
          </LinearGradient>
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity onPress={onPressHandler} activeOpacity={0.8}>
          <AppText style={[styles.solidButtonText, buttonTextStyle]}>
            {buttonTitle}
          </AppText>
        </TouchableOpacity>
      );
  }
};

export default Button;
