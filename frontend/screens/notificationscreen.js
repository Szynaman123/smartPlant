import React, {Children, Profiler, useState} from 'react';
import LoginProvider, { useLogin } from '../context/LoginProvider';
import Box from '../components/boxes';
import post from 'axios';
import { Text, View, Dimensions, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert, TextInput, TouchableOpacity} from 'react-native';

const notificationscreen = () =>
{
    return(
        <ScrollView>
            <View style={styles.flexbox}>
            <View style={styles.helloView}>
            <Text style={styles.txtHello}>Witaj {}!</Text>
            <Image style={styles.hello} source={require('../assets/hello4.png')}/>
            <Image style={styles.hello} source={require('../assets/brakczynnosci.png')}/>
            </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    flexbox:
    {
        alignItems: 'center',

    },
    helloView:
    {
        paddingVertical:50,
        paddingHorizontal:10,
  
    },
    hello:
    {
        width: Dimensions.get('window').width*0.9,
      height: Dimensions.get('window').width*0.6,
      marginVertical:30,
      zIndex: 1,
    },
    txtHello:
    {
        padding:30,
        marginBottom: -130,
        zIndex: 2,
        fontSize: 18,
        color: '#98BF63',
    },
    menu:    {
        padding:10,
        marginBottom:0,
        zIndex: 3,
        fontSize: 18,
        color: '#98BF63',
    }
});

export default notificationscreen;