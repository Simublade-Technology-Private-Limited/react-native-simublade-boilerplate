import React from 'react';
import {useFormContext, useController} from 'react-hook-form';
import {TextInput as RNTextInput, View, Text, StyleSheet} from 'react-native';
import {TextInputProps} from './TextInput';

const ControlledInput = (props: TextInputProps) => {
  const formContext = useFormContext();
  const {formState} = formContext;

  const {name, label, rules, defaultValue, ...inputProps} = props;

  const {field} = useController({name, rules, defaultValue});

  const hasError = Boolean(formState?.errors[name]);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View>
        <RNTextInput
          autoCapitalize="none"
          textAlign="left"
          style={styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
        />

        <View style={styles.errorContainer}>
          {hasError && (
            <Text style={styles.error}>{formState.errors[name].message}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ControlledInput;

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  container: {
    flex: -1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  errorContainer: {
    flex: -1,
    height: 25,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
});
