import React, {forwardRef, Ref, useState} from 'react';

import {
  View,
  TextInput,
  TextInputProps as RNTextInputProps,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';

import {
  useController,
  useFormContext,
  UseControllerProps,
} from 'react-hook-form';
import {COLORS} from '../../utils/constants/colors';
import {FONT_CONSTANTS} from '../../utils/constants/fonts';
import {IMAGES} from '../../utils/constants/assets';

interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label?: string;
  name: string;
  defaultValue?: string;
  setFormError?: Function;
  rightIcon?: ImageSourcePropType;
  isPassword?: boolean;
  rightIconPress?: () => void;
  containerStyle?: ViewStyle;
}

const ControlledInput = forwardRef(
  (props: TextInputProps, ref: Ref<TextInput> | undefined) => {
    const formContext = useFormContext();
    const {formState} = formContext;
    const [secureEntry, setSecureEntry] = useState<boolean>(true);

    const {
      name,
      label,
      rules,
      defaultValue,
      rightIcon,
      isPassword,
      rightIconPress,
      ...inputProps
    } = props;

    const {field} = useController({name, rules, defaultValue});

    const hasError = Boolean(formState?.errors[name]);

    return (
      <View style={[styles.container, props?.containerStyle]}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={[styles.inputField]}>
          <View style={{flex: 1}}>
            <TextInput
              autoCapitalize="none"
              textAlign="left"
              style={styles.input}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              ref={ref}
              {...(isPassword && {secureTextEntry: secureEntry})}
              {...inputProps}
            />
          </View>
          {rightIcon && (
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => {
                setSecureEntry(!secureEntry);
                rightIconPress?.();
              }}>
              <Image
                source={
                  isPassword && secureEntry ? IMAGES.eye_close : rightIcon
                }
              />
            </TouchableOpacity>
          )}
        </View>
        {/* <View style={styles.errorContainer}>
          {hasError && (
            <Text style={styles.error}>
              {formState?.errors[name]?.message as string}
            </Text>
          )}
        </View> */}
      </View>
    );
  },
);

export const AppInput = forwardRef(
  (props: TextInputProps, ref: Ref<TextInput> | undefined) => {
    const {name, rules, label, defaultValue, setFormError, ...inputProps} =
      props;

    const formContext = useFormContext();

    // Placeholder until input name is initialized
    if (!formContext || !name) {
      const msg = !formContext
        ? 'TextInput must be wrapped by the FormProvider'
        : 'Name must be defined';
      console.error(msg);
      setFormError?.(true);
      return null;
    }

    return <ControlledInput ref={ref} {...props} />;
  },
);

const styles = StyleSheet.create({
  label: {
    fontFamily: FONT_CONSTANTS.primary_bold_font,
    color: COLORS.text_color,
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 0,
  },
  container: {
    flex: -1,
    justifyContent: 'center',
    // padding: 8,
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.white_color,
    // borderWidth: 1
  },
  input: {
    backgroundColor: COLORS.white_color,
    fontFamily: FONT_CONSTANTS.primary_regular_font,
    fontSize: 14,
    color: COLORS.text_color,
    borderColor: 'none',
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  errorContainer: {
    flex: -1,
    height: 25,
  },
  error: {
    color: COLORS.error_color,
  },
  inputField: {
    height: 56,
    backgroundColor: COLORS.white_color,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.input_border_color(0.08),
  },
});

// Usage

/**
 *  <AppInput
        name="email"
        label="Email"
        placeholder="jon.doe@email.com"
        keyboardType="email-address"
        rules={EMAIL_VALIDATION}
        setFormError={setError}
    />
 */
