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

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

const App = createAppContainer(MainNavigator);

export default App;
