import React, {useState} from 'react';
import Box from '../components/boxes';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity, Alert
} from 'react-native';
import {default as axios} from "axios";

const Gatunki = () =>
{
    const onLoad = async () => {
    const axios = require('axios').default;
        const res = await axios.get("http://192.168.0.21:3000/Plants").then(resp => {
        console.log(resp.data);
        ;})}

    return(
        <ScrollView>
    <View style={styles.flexbox1}>
        <View style={styles.flexbox2}>
            <Text style={styles.text1}>Gatunek po polsku</Text>
            <Text style={styles.text2}>Gatunek w łacinie</Text>
            <Image style={styles.arrow} source={require('../assets/Arrow3.png')}/>
        </View>
        <Text style={styles.dash}>________________________________________________________________________</Text>
        <TouchableOpacity onPress={onLoad}>
                    <Box colorHex="#98BF63" colorTextHex="#F9F9F9" TextInside="Pokaz gatunki" width={100}></Box>
                </TouchableOpacity>
    </View>
    </ScrollView>

    );
}

const styles =StyleSheet.create({
    flexbox1:
    {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    flexbox2:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },

    text1:
    {
        color: '#98BF63',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        //marginRight: 10,

    },

    text2:
    {
        color: '#777777',
        fontSize: 15,
        fontStyle: 'italic',
        flex: 1,
        //marginRight: 15,

    },

    arrow:
    {
        //marginRight: 5,

    },

    dash: {
        flex:1,
        borderTopWidth: 1,
        borderColor: "#B9B9B9",
        color: '#ffffff',
      }


});

export default Gatunki;