import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  FieldValues,
} from 'react-hook-form';
import {TextInput} from '../lib/app-input/TextInput';
import Theme from '../components/Theme';

interface FormValues {
  email: string;
  password: string;
}

const Profile = () => {
  /*
   GET METHODS FROM USEFORM
*/
  const {...methods} = useForm();

  const onSubmit: SubmitHandler<FieldValues> = data => console.log({data});

  const onError: SubmitErrorHandler<FormValues> = (
    errors,
    _event?: React.BaseSyntheticEvent,
  ) => {
    return console.log(errors);
  };

  /*
    WRAP TEXTINPUT COMPONENT IN FORM PROVIDER,
    PASSING CONTEXT METHODS INTO PROVIDER

    FOR THE SUBMIT BUTTON TO RECEIVE FORM DATA
    PASS METHOD HANDLESUBMIT WITH FUNCTION HANDLERS INTO ONPRESS

  */

  return (
    <Theme isAreaInsets containerStyle={{backgroundColor: 'red'}}>
      <FormProvider {...methods}>
        {/* Pass all methods into the context */}
        <TextInput
          name="email"
          label="Email"
          placeholder="jon.doe@email.com"
          keyboardType="email-address"
          rules={{required: 'Email is required!'}}
        />
        <TextInput
          name="password"
          label="Password"
          secureTextEntry
          rules={{required: 'Password is required!'}}
        />
      </FormProvider>
      <View style={styles.button}>
        <Button
          title="Save"
          color="white"
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </View>
    </Theme>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
});
