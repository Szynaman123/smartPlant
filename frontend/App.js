import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert} from 'react-native';
import Box from './components/boxes';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Registration from './screens/Registration';
import Login from './screens/Login';
import MojeRosliny from './screens/MojeRosliny';
import notificationscreen from './screens/notificationscreen';
import MainNavigator from "./navigation/SmartPlantNavigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const App = () => {
  return(
    <NavigationContainer theme={MyTheme}>
  <MainNavigator/>
  </NavigationContainer>
  
  );
}
 export default App;
