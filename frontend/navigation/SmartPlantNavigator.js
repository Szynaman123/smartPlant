import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { DefaultTheme} from '@react-navigation/native';

// stacks
import Home from "../screens/Home";
import Registration from "../screens/Registration";
import Login from "../screens/Login";

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };

// drawer navigation options
const MainNavigator = createStackNavigator({
    Hello: {
        screen: Home,
        navigationOptions:{
            
            headerStyle: {
                backgroundColor: '#98BF63',
            },
            headerTintColor: '#fff',
            cardStyle: {
                backgroundColor: "#ffffff",
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    },
    Rejestracja: {
        screen: Registration,
        navigationOptions:        {   
         headerStyle: {
                backgroundColor: '#98BF63',
            },
            cardStyle: {
                backgroundColor: "#ffffff",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    },
    Logowanie:
    {
        screen: Login,
        navigationOptions:{
            headerStyle: {
                backgroundColor: '#98BF63',
            },
            cardStyle: {
                backgroundColor: "#ffffff",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            defaultNavigationOptions:{colors:{background: 'white'}}
        }
        
      }
     
});

export default createAppContainer(MainNavigator);
