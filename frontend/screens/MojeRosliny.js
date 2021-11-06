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

const MojeRosliny = () =>
{
    return(
        <ScrollView>
            <View style={styles.flexbox}>
                    <View style = {styles.plantcontainer} >
                            <Image style = {styles.logo}
                                   source={require('../assets/pic.png')}
                            />
                </View>
                    <View style = {styles.kreska} ></View>
                    <View style = {styles.plantcontainer} >
                        <Image style = {styles.logo}
                               source={require('../assets/pic.png')}
                        />
                    </View>
                    <View style = {styles.kreska} ></View>
                    <View style = {styles.plantcontainer} >
                        <Image style = {styles.logo}
                               source={require('../assets/pic.png')}
                        />
                    </View><View style = {styles.kreska} ></View>
                    <View style = {styles.plantcontainer} >
                        <Image style = {styles.logo}
                               source={require('../assets/pic.png')}
                        />
                    </View>
                    <View style = {styles.kreska} ></View>
                </View>
        </ScrollView>
    )
};

const styles =StyleSheet.create({
    flexbox:
        {
            alignItems: 'center',
        },

    kreska:
        {
            backgroundColor: '#B9B9B9',
            height:1,
    },
    plantcontainer: {
        paddingHorizontal: 5,
        paddingTop:5,

        backgroundColor: '#F9F9F9',
        width: 390,
        height: 160,

    },
    logo: {
        borderRadius: 25,
        width: 150,
        height: 150,
        paddingHorizontal: 0,
        paddingTop:0,
        marginBottom: 0,
        backgroundColor: '#7722',

    },


});

export default MojeRosliny;