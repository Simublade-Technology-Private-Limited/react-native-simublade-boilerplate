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
};
