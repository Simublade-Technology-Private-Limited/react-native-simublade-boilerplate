import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Animated, {withSpring, useAnimatedStyle} from 'react-native-reanimated';

/**
 * @param label: Label of the checkbox
 *
 * @param isChecked: Boolean for storing checkbox value
 *
 * @param onChange: Callback to send the latest state of the checkbox
 *
 * @param containerStyle: External style for container holding checkbox and its label
 *
 * @param textStyle: External style for label text
 *
 * @param checkboxStyle: External style for the checkbox
 */

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  checkboxStyle?: StyleProp<ViewStyle>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  isChecked,
  onChange,
  containerStyle,
  textStyle,
  checkboxStyle,
}) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const toggleCheckbox = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange && onChange(newChecked);
  };

  const animatedStyle = useAnimatedStyle(() => {
    const scale = withSpring(checked ? 1.05 : 1, {
      damping: 5,
      stiffness: 80,
      overshootClamping: false,
    });
    return {
      transform: [{scale}],
    };
  });

  const checkboxColor = checked ? '#4CAF50' : '#9E9E9E';
  const borderColor = checked ? '#4CAF50' : '#9E9E9E';

  return (
    <TouchableOpacity
      onPress={toggleCheckbox}
      activeOpacity={0.8}
      accessible={true}
      accessibilityRole="checkbox">
      <View
        style={[{flexDirection: 'row', alignItems: 'center'}, containerStyle]}>
        <Animated.View
          style={[
            {
              width: 24,
              height: 24,
              borderWidth: 2,
              borderColor,
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 8,
            },
            checkboxStyle,
            animatedStyle,
          ]}>
          {checked && (
            <Text style={[{color: checkboxColor, fontSize: 18}, textStyle]}>
              &#10003;
            </Text>
          )}
        </Animated.View>
        <Text style={textStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
