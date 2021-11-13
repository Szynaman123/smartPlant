import React, {useState} from 'react';
import Box from '../components/boxes';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity, Alert, Dimensions,
} from 'react-native';
import {default as axios} from "axios";


const Gatunki = () =>
{
        const newGatunek = {
        nazwapolska: 'dupa',
        nazwalacina: 'dupa2',
        idgatunku: 1234,
        nawozenie: 'nawozenie',
        podlewanie: 'podlewanie',
        stanowisko:  'stanowsiko',
        szkodniki:  'szkodniki',
        temperatura: 'tempertura',
        wilgotnosc_lato: 0.3,
        wilgotnosc_zima: 0.2,
        przesadzanie: 'przesadzanie'
    };


    const DodajGatunek = async () =>  {
        const axios = require('axios').default;
        const res = await axios.post('http://192.168.0.21:3000/Plants', newGatunek).then((response) => {
            console.log(response);
        ;})}

    const onLoad = async () => {
    const axios = require('axios').default;

        const res = await axios.get("http://192.168.0.21:3000/Plants").then(resp => {
        console.log(resp.data);
        console.log(typeof resp.data);
        ;})}

    return(
        <ScrollView>
    <View style={styles.flexbox1}>
        <View style={styles.flexbox2}>
            <Text style={styles.text1}>Gatunek po polsku</Text>
            <Text style={styles.text2}>Gatunek w łacinie</Text>
            <Image style={styles.arrow} source={require('../assets/Arrow3.png')}/>
        </View>
        <Image style={styles.dash} source={require('../assets/dash.png')}/>
        <TouchableOpacity onPress={onLoad}>
                    <Box colorHex="#98BF63" colorTextHex="#F9F9F9" TextInside="Pokaz gatunki" width={100}></Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={DodajGatunek}>
                    <Box colorHex="#98BF63" colorTextHex="#F9F9F9" TextInside="Dodaj" width={100}></Box>
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
        width: Dimensions.get('window').width*1,
        height: 1,
      },


});

export default Gatunki;