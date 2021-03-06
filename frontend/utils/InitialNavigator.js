import React, { useContext } from 'react';
import Home from "../screens/Home";
import Registration from "../screens/Registration";
import Login from "../screens/Login";
import { useLogin } from './../context/LoginProvider';
import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";



const Stack = createStackNavigator();

const StackNavigator =() =>{
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
                      options={{
                          title: 'Hello!',
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
                      }}/>
        <Stack.Screen name="Registration" component={Registration}
                      options={{
                          title: 'Rejestracja',
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
                      }}/>
        <Stack.Screen name="Login" component={Login}
                      options={{
                          title: 'Logowanie',
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
                      }}
        />
    </Stack.Navigator>);
};
const InitialStack = () => {
    const { isLoggedIn } = useLogin();
    return isLoggedIn ? <DrawerNavigator/> : <StackNavigator />;
};

export default InitialStack;