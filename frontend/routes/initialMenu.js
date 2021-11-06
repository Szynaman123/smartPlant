import Home from "../screens/Home";
import Registration from "../screens/Registration";
import Login from "../screens/Login";
import notificationscreen from "../screens/notificationscreen";
import MojeRosliny from "../screens/MojeRosliny";
import React from "react";
import { NavigationContainer, DefaultTheme  } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import MyTheme from '../App';

const Stack = createStackNavigator();

const InitialStack = () => {

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}
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
                <Stack.Screen name="Registration" component={Registration}
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
                <Stack.Screen name="Login" component={Login}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default InitialStack;
