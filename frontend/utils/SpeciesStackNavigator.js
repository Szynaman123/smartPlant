import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
    createStackNavigator,
    StackContentScrollView,
    StackItemList,
} from '@react-navigation/stack';
import { useId } from './../context/LoginProvider';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import PrzegladGatunku from "../screens/PrzegladGatunku";

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };

const Stack = createStackNavigator();

const StackNavigator = props =>
{
    const { setIsChosen, idSpecies} = useId();
    return(
        <Stack.Navigator>
            <Stack.Screen name="przegladgatunku" component={PrzegladGatunku}
            options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#98BF63',
                    textAlign: 'center',
                },
                cardStyle: {
                  backgroundColor: "#ffffff",
              },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>

        </Stack.Navigator>


    );
}

export default StackNavigator;
