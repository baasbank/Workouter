import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import Workout from './src/screens/Workout';


const AppNavigator = createStackNavigator(
  {
  Home,
  Workout
  },
  {
    initialRouteName: 'Home'
  }
  );


const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
