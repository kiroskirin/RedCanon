/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Home/HomeScreen';
import DetailScreen from './Detail/DetailScreen';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/index';

const store = createStore(reducer);

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

const Navigation = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
