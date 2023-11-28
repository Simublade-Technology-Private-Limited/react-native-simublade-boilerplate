import Config from 'react-native-config';

export const STRING_CONSTANTS = {
  app_name: Config.APP_NAME || '',
  ok_text: 'ok',

  required_validation: (name: string) => `${name} is required!`,
  link_open_error: "Don't know how to open this URL",
  connection_offline: 'Your connection seems Offline',
  connection_online: 'You are back online',
  connection_offline_description:
    'Cannot proceed with the operation.\nPlease check your Internet connection.',
  already_in_use_email:
    'This email is already in use. Please enter a different email address.',
  invalid_email: 'Invalid email format. Double-check and try again.',
  invalid_pass: 'Please enter a valid password.',
  weak_password: 'Password must be 6 characters long or more.',
  try_after_some_time: 'Too many requests!!! Please try after some time.',
  not_found_email: "We couldn't find an account with this email address.",
};
