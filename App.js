import React, { Component, Fragment } from 'react';
import SetUpScreen from './components/setUpScreen';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


export default class App extends Component {
  
  
  render() {
    
    return (
      <SafeAreaView>
        
        <SetUpScreen/>
      </SafeAreaView>

    );
  }
}

