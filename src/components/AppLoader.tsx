import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {APP_CONSTANTS} from '../utils/constants/appConstants';
import {COLORS} from '../utils/constants/colors';
import {AppActivityIndicator} from './AppActivityIndicator';

const AppLoader = () => {
  const showLoader = useSelector(
    (state: any) => state.UIReducer[APP_CONSTANTS.enable_loader] || false,
  );
  return showLoader ? (
    <View style={styles.loaderWraper}>
      <AppActivityIndicator color={COLORS.text_color} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  loaderWraper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black_rgba(0.5),
  },
});

export default AppLoader;
