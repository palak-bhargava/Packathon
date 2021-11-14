import React, { Component, Fragment } from 'react';
import DuringFlight from './components/duringFlight';
import ToDoList from './components/toDoList';
import SetUpScreen from './components/setUpScreen';
import PreFlight from './components/preFlight';
import MainScreen from './components/mainScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = createStackNavigator({
  SetUpScreen: {screen: SetUpScreen, navigationOptions: {headerShown:false}},
  MainScreen: {screen: MainScreen, navigationOptions: {headerShown:false}},
  PreFlight: {screen: PreFlight, navigationOptions: {headerShown:false}},
  DuringFlight: {screen: DuringFlight, navigationOptions: {headerShown:false}},
  ToDoList: {screen: ToDoList, navigationOptions: {headerShown:false}},
}, {
  initialRoute: 'SetUpScreen'
}
);

export default createAppContainer(App);

