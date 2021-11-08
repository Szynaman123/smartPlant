import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert} from 'react-native';
import Box from './components/boxes';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Registration from './screens/Registration';
import Login from './screens/Login';
import MojeRosliny from './screens/MojeRosliny';
import notificationscreen from './screens/notificationscreen';
import Gatunki from './screens/Gatunki';
import PrzegladGatunku from './screens/PrzegladGatunku'

const COLORS = [
  { colorname: 'DarkGreen', hexCode: '#608844', colortextname: 'VeryLightGrey', textHexCode: '#F9F9F9', txtInside: "1. Monitoruj wilgotność ziemi"},
  { colorname: 'Green', hexCode: '#98BF63', colortextname: 'VeryLightGrey', textHexCode: '#F9F9F9', txtInside: "2. Czytaj wskazówki na temat pielęgnacji roślin"},
  { colorname: 'LightGreen', hexCode: '#EAF2E0', colortextname: 'Green', textHexCode: '#98BF63', txtInside: "3"},
  { colorname: 'DarkGrey', hexCode: '#777777', colortextname: 'VeryLightGrey', textHexCode: '#F9F9F9', txtInside: "4"},
  { colorname: 'Grey', hexCode: '#B9B9B9', colortextname: 'VeryLightGrey', textHexCode: '#F9F9F9', txtInside: "5"},
  { colorname: 'VeryLightGrey', hexCode: '#F9F9F9', colortextname: 'DarkGrey', textHexCode: '#777777', txtInside: "6"},
]
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};
const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <NavigationContainer theme={MyTheme}>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}
      options={{
        title: 'Hello!',
        headerStyle: {
          backgroundColor: '#98BF63',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Drawer.Screen name="Registration" component={Registration}
       options={{
        title: 'Rejestracja',
        headerStyle: {
          backgroundColor: '#98BF63',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Drawer.Screen name="Login" component={Login} 
      options={{
        title: 'Logowanie',
        headerStyle: {
          backgroundColor: '#98BF63',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
       <Drawer.Screen name="notificationscreen" component={notificationscreen} 
      options={{
        title: 'Powiadomienia',
        headerStyle: {
          backgroundColor: '#98BF63',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
       <Drawer.Screen name="MojeRosliny" component={MojeRosliny} 
      options={{
        title: 'Moje Rośliny',
        headerStyle: {
          backgroundColor: '#98BF63',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Drawer.Screen name="Gatunki" component={Gatunki} 
      options={{
        title: 'Lista gatunków',
        headerStyle: {
          backgroundColor: '#98BF63',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Drawer.Screen name="PrzegladGatunku" component={PrzegladGatunku} 
      options={{
        title: 'Przegląd gatunku',
        headerStyle: {
          backgroundColor: '#98BF63',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
};


 export default App;