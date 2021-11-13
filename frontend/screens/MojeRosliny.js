import React, {useState} from 'react';
import Box from '../components/boxes';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity, Alert,
    Dimensions,
} from 'react-native';
import {default as axios} from "axios";

const MojeRosliny = () =>
{
    return(
        <ScrollView>
            <View style={styles.flexbox1}>
                <View style={styles.flexbox2}>
                    <Image style = {styles.logo} source={require('../assets/pic.png')}/>
                    <View style={styles.flexbox3}>
                        <Text style={styles.text1}>Roślina</Text>
                        <Text style={styles.text2}>Gatunek</Text>
                    </View>
                </View>
                <Image style={styles.dash} source={require('../assets/dash.png')}/>
            </View>
        </ScrollView>
    )
};

const styles =StyleSheet.create({

    flexbox1:
    {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },

    flexbox2:
    {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 15,

    },

    flexbox3:
    {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,

    },

    text1:
    {
        color: "#98BF63",
        fontSize: 20,
    },

    text2:
    {
        color: "#777777",
        fontSize: 10,
        fontStyle: 'italic',

    },

    dash: {
        width: Dimensions.get('window').width*1,
        height: 1,
      },

    logo: {
        borderRadius: 25,
        width: Dimensions.get('window').width*0.3,
        height: Dimensions.get('window').width*0.3,
        paddingHorizontal: 0,
        paddingTop:0,
        marginBottom: 0,
        backgroundColor: '#7722',

    },


});

export default MojeRosliny;