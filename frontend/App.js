import React, {useEffect} from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import InitialStack from './utils/InitialNavigator';
import LoginProvider from './context/LoginProvider';

const App = () => {
  return (
      <LoginProvider>
      <NavigationContainer>
        < InitialStack/>
      </NavigationContainer>
      </LoginProvider>
          );
};

export default App;