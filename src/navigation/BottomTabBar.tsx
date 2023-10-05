/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../utils/constants/colors';
import {FONT_CONSTANTS} from '../utils/constants/fonts';
import {NAVIGATION_CONSTANTS} from '../utils/constants/navigationConstants';
import {IMAGES} from '../utils/constants/assets';
import Home from '../container/Home';
import Cart from '../container/Cart';
import Profile from '../container/Profile';

const Tab = createBottomTabNavigator();

export default (_props: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
      initialRouteName={NAVIGATION_CONSTANTS.home_screen}>
      <Tab.Screen
        name={NAVIGATION_CONSTANTS.home_screen}
        component={Home}
        options={{
          tabBarIcon: ({focused}: any) => (
            <View style={styles.container}>
              <Image source={focused ? IMAGES.home : IMAGES.home} />
              <Text
                style={[focused ? styles.focusBottomText : styles.bottomText]}>
                {'Home'}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION_CONSTANTS.cart_screen}
        component={Cart}
        options={{
          tabBarIcon: ({focused}: any) => (
            <View style={styles.container}>
              <Image source={focused ? IMAGES.cart : IMAGES.cart} />
              <Text
                style={[focused ? styles.focusBottomText : styles.bottomText]}>
                {'Cart'}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION_CONSTANTS.profile_screen}
        component={Profile}
        options={{
          tabBarIcon: ({focused}: any) => (
            <View style={styles.container}>
              <Image source={focused ? IMAGES.profile : IMAGES.profile} />
              <Text
                style={[focused ? styles.focusBottomText : styles.bottomText]}>
                {'Profile'}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.white_color,
    height: 92,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    height: 80,
    justifyContent: 'center',
  },
  centerContainerStyle: {
    width: 70,
    height: 43,
    backgroundColor: COLORS.blue,
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  bottomText: {
    fontSize: 11,
    fontFamily: FONT_CONSTANTS.primary_medium_font,
    color: COLORS.text_color,
    opacity: 0.6,
    lineHeight: 13,
    // marginTop: 10,
  },
  focusBottomText: {
    fontSize: 11,
    fontFamily: FONT_CONSTANTS.primary_semi_bold_font,
    color: COLORS.text_color,
    lineHeight: 13,
    // marginTop: 10,
  },
});
