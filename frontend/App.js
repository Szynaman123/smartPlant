import React, {useEffect} from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert} from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import InitialStack from './utils/InitialNavigator';
import LoginProvider from './context/LoginProvider';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const App = () => {
  return (
      <LoginProvider>
      <NavigationContainer theme={MyTheme}>
        < InitialStack/>
      </NavigationContainer>
      </LoginProvider>
          );
};

export default App;