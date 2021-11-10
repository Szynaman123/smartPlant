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

const PrzegladGatunku = () =>
{
    return(
        <ScrollView>
                <View style={styles.flexbox2}>
                    <Text style={styles.titleText}>Nazwa gatunku po polsku</Text>
                    <Text style={styles.titleSecondText}>Nazwa gatunku po łacinie</Text>
                    <Image style={styles.plantPic} source={require('../assets/plant.png')}/>
                </View>
                <View style={styles.flexbox3}>
                    <Text style={styles.plantPropertiesTitle}>Stanowisko</Text>
                    <Text style={styles.dash}>______________________________________________________</Text>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Temperatura pomieszczenia</Text>
                    <Text style={styles.dash}>______________________________________________________</Text>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Podlewanie</Text>
                    <Text style={styles.dash}>______________________________________________________</Text>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Nawożenie</Text>
                    <Text style={styles.dash}>______________________________________________________</Text>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Przesadzanie</Text>
                    <Text style={styles.dash}>______________________________________________________</Text>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Szkodniki i inne zagrożenia</Text>
                    <Text style={styles.dash}>_____________________________________________________</Text>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({

    flexbox1:
    {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    flexbox2:
    {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },

    flexbox3:
    {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },

    plantPic:
    {
        height: 203,
        width: 175,
    },

    titleText:
    {
        color: '#98BF63',
        fontSize: 20,
    },

    titleSecondText:
    {
        color: '#777777',
        fontSize: 14,
        fontStyle: 'italic',
        paddingVertical: 10,
    },

    plantPropertiesTitle:
    {
        color: '#777777',
        fontSize: 14,
        paddingTop: 15,
    },

    plantProperties:
    {
        color: '#777777',
        fontSize: 12,
    },

    dash: {
        flex:1,
        borderTopWidth: 1,
        borderColor: "#B9B9B9",
        color: '#ffffff',
        marginBottom: -10,
      },
}
)

export default PrzegladGatunku;