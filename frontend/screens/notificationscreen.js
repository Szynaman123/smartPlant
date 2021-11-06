import React, {useState} from 'react';
import Box from '../components/boxes';
import post from 'axios';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert, TextInput, TouchableOpacity} from 'react-native';

const notificationscreen = ({route}) =>
{
    return(
        <ScrollView>
            <View style={styles.flexbox}>
            <View style={styles.helloView}>
            <Text style={styles.txtHello}>Witaj {/*route.params.paramKey*/}!</Text>
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
      width: 332,
      height: 228,
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