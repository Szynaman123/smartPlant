import React, {useState} from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert} from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import InitialStack from './utils/InitialNavigator';
import LoginProvider from './context/LoginProvider';
import AppContext from './components/context';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const fetchFonts = () =>
{
  return Font.loadAsync({
    'lato-regular': require('./assets/fonts/Lato-Regular.ttf')
  })
}



const App = () => {
  
  const [fontLoaded, setFontLoaded] = useState(false);

  if(fontLoaded != true){
    <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}/>
  }

  return (
      <LoginProvider>
      <NavigationContainer theme={MyTheme}>
        < InitialStack/>
      </NavigationContainer>
      </LoginProvider>

          );
};

export default App;