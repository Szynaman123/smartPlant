import React from "react";
import {
    createStackNavigator,
    StackContentScrollView,
    StackItemList,
} from '@react-navigation/stack';
import { useId } from './../context/LoginProvider';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import PrzegladRosliny from "../screens/PrzegladRosliny";
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
    const { setIsPlantChosen, plantId} = useId();

    return(
        <Stack.Navigator>
            <Stack.Screen name="przegladrosliny" component={PrzegladRosliny}
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
