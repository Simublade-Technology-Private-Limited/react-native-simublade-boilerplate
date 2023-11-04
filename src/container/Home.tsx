import React from 'react';
import {AppText} from '../components/AppText';
import Theme from '../components/Theme';
import {View} from 'react-native';
import {TextBase} from 'react-native';

const Home = () => {
  let a = 10;

  return (
    <Theme isAreaInsets containerStyle={{backgroundColor: 'red'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AppText>Home</AppText>
      </View>
    </Theme>
  );
};

export default Home;
