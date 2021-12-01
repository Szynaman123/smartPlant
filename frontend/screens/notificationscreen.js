import React, {Profiler, useState} from 'react';
import Colors from '../constants/colors';
import { Text, View, Dimensions, StyleSheet, ScrollView, Image,} from 'react-native';
import { useLogin } from './../context/LoginProvider';

const notificationscreen = props =>
{
    const { setIsLoggedIn, profile } = useLogin();
    return(
        <ScrollView>
            <View style={styles.flexbox}>
            <View style={styles.helloView}>
            <Text style={styles.txtHello}>Witaj {profile.firstname}!</Text>
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
        color: Colors.Green,
    },
});

export default notificationscreen;