import notificationscreen from "../screens/notificationscreen";
import MojeRosliny from "../screens/MojeRosliny";
import Gatunki from "../screens/Gatunki";
import PrzegladGatunku from "../screens/PrzegladGatunku";
import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { useLogin } from './../context/LoginProvider';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
    const { setIsLoggedIn, profile } = useLogin();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 20,
                        backgroundColor: '#EAF2E0',
                        marginBottom: 20,
                    }}>
                    <View>
                        <Text>{profile.firstname} {profile.surname}</Text>
                        <Text>{profile.mail}</Text>
                    </View>
                </View>
                <DrawerItemList {...props}
                />
            </DrawerContentScrollView>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    bottom: 50,
                    backgroundColor: '#EAF2E0',
                    padding: 20,
                }}
                onPress={() => setIsLoggedIn(false)}
            >
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const DrawerNavigator = () => {

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: '',
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="notificationscreen" component={notificationscreen}
                          options={{
                               drawerActiveBackgroundColor:'#F9F9F9',
                               drawerActiveTintColor:'#777777',
                               drawerInactiveTintColor: '#777777',
                               title: 'Powiadomienia',
                               headerStyle: {
                                   backgroundColor: '#98BF63',
                               },
                               headerTintColor: '#fff',
                               headerTitleStyle: {
                                   fontWeight: 'bold',
                               },
                               cardStyle: {
                                   backgroundColor:'#ffffff',
                               },
                                                           
                           }}/>
            <Drawer.Screen name="MojeRosliny" component={MojeRosliny}
                           options={{
                            drawerActiveBackgroundColor:'#F9F9F9',
                            drawerActiveTintColor:'#777777',
                            drawerInactiveTintColor: '#777777',
                               title: 'Moje Rosliny',
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
                            drawerActiveBackgroundColor:'#F9F9F9',
                            drawerActiveTintColor:'#777777',
                            drawerInactiveTintColor: '#777777',
                               title: 'Gatunki',
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
                            drawerActiveBackgroundColor:'#F9F9F9',
                            drawerActiveTintColor:'#777777',
                            drawerInactiveTintColor: '#777777',
                               title: 'Przegląd gatunku',
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
                           
        </Drawer.Navigator>

    );
}

export default DrawerNavigator;