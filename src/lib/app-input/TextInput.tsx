import React from 'react';
import {TextInputProps as RNTextInputProps} from 'react-native';
import {useFormContext, UseControllerProps} from 'react-hook-form';
import ControlledInput from './ControlledInput';

export interface TextInputProps extends RNTextInputProps, UseControllerProps {
  name: string;
  label: string;
  defaultValue?: string;
  setFormError?: Function;
}

export const TextInput = (props: TextInputProps) => {
  const {name} = props;

  const formContext = useFormContext();

  // Placeholder until input name is initialized
  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined';
    console.error(msg);
    return null;
  }

  return <ControlledInput {...props} />;
};
