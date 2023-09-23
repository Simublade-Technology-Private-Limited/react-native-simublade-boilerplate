/**
 * Not keeping as ENUM, as sometimes urls need to be structured dynamically
 * And this is not supported by ENUMs
 */

import Config from 'react-native-config';
export const GOOGLE_PLACE_API = 'https://maps.googleapis.com/';

export const API_END_POINTS = {
  // Api endpoints
  user_login: `users/login/`,

  // Google apis
  googlePlaceAutocomplete: `${GOOGLE_PLACE_API}maps/api/place/autocomplete/json?components=country:usa&key=${Config.GOOGLE_PLACES_API_KEY}`,
};
