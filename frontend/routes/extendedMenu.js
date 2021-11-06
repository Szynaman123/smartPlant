import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import MyTheme from '../App';

import notificationscreen from "../screens/notificationscreen";
import MojeRosliny from "../screens/MojeRosliny";
import React from "react";
import { NavigationContainer, DefaultTheme  } from 'react-navigation';
import {createStackNavigator} from "@react-navigation/stack";



const Stack = createStackNavigator();

const ExtendedStack = () => {

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen name="notificationscreen" component={notificationscreen}
                              options={{
                                  title: 'Smart Plant',
                                  headerStyle: {
                                      backgroundColor: '#98BF63',
                                  },
                                  headerTintColor: '#fff',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}/>
                <Stack.Screen name="MojeRosliny" component={MojeRosliny}
                              options={{
                                  title: 'Moje Rosliny',
                                  headerStyle: {
                                      backgroundColor: '#98BF63',
                                  },
                                  headerTintColor: '#fff',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default ExtendedStack;
