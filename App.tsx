import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppContainer from './src/container/AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppContainer />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
