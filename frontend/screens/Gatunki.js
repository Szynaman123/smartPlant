import React, {useState} from 'react';
import Box from '../components/boxes';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity, Alert, Dimensions,
} from 'react-native';
import Colors from '../constants/colors';
import {default as axios} from "axios";


const Gatunki = () =>
{
        /*const newGatunek = {
            nazwapolska: "Achimenes",
            nazwalacina: "Achimenes Hybrida",
            idgatunku: 0,
            nawozenie: "przez okres wegetacji raz w miesiącu roztworem nawozów mineralnych przeznaczonych dla roślin doniczkowych.",
            podlewanie: "od rozpoczęcia wegetacji (luty, marzec) umiarkowane, wyłącznie przegotowaną wodą.",
            stanowisko: "widne, ale o świetle rozproszonym; nie wystawiać na bezpośrednie działanie promieni słonecznych.",
            szkodniki: "w wyniku zalania i zakwaszenia podłoża może wystąpić chloroza.",
            temperatura: "20 do 25 st.C.",
            wilgotnosc_lato: "0,3",
            wilgotnosc_zima: "0,3",
            przesadzanie: "w lutym, marcu kłącze rośliny sadzi się w podłoże przygotowane z ziemi kompostowej, nieodkwaszonego torfu i piasku (zmieszanych w stosunku 4:1:1). Roślina wytworzy najpierw liście, potem zakwitnie. Po przekwitnięciu część nadziemna zamiera, należy wówczas kłącze wyjąć z doniczki i przechowywać w wilgotnym piasku, w ciepłym miejscu aż do następnej wiosny."
    };*/


    const DodajGatunek = async () =>  {
        const axios = require('axios').default;
        const res = await axios.post('http://192.168.0.21:3000/plants', newGatunek).then((response) => {
            console.log(response);
        ;})}

    const onLoad = async () => {
    const axios = require('axios').default;

        const res = await axios.get("http://192.168.0.21:3000/plants").then(resp => {
        //console.log(resp.data);
        //console.log(typeof resp.data);
        const plants_array =[{}]=resp.data;
        //console.log(plants_array[2].przesadzanie);
       
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
                    <Box colorHex={Colors.Green} colorTextHex={Colors.VeryLightGrey} TextInside="Pokaz gatunki" width={100}></Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={DodajGatunek}>
                    <Box colorHex={Colors.Green} colorTextHex={Colors.VeryLightGrey} TextInside="Dodaj" width={100}></Box>
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
        color: Colors.DarkGrey,
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

      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },


});

export default Gatunki;