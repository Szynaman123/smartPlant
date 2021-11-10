import notificationscreen from "../screens/notificationscreen";
import MojeRosliny from "../screens/MojeRosliny";
import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { useLogin } from './../context/LoginProvider';

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
                        backgroundColor: '#f6f6f6',
                        marginBottom: 20,
                    }}
                >
                    <View>
                        <Text>{profile.name}</Text>
                        <Text>{profile.email}</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    bottom: 50,
                    backgroundColor: '#f6f6f6',
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
                               title: 'Smart Plant',
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
                               title: 'Moje Rosliny',
                               headerStyle: {
                                   backgroundColor: '#98BF63',
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