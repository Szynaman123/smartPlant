import React, {useState} from 'react';
import Box from '../components/boxes';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity, Alert, Dimensions
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
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Temperatura pomieszczenia</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Podlewanie</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Nawożenie</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Przesadzanie</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>Tu będzie wkrótce info o pielęgnacji</Text>

                    <Text style={styles.plantPropertiesTitle}>Szkodniki i inne zagrożenia</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
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
        height: Dimensions.get('window').width*0.6,
        width: Dimensions.get('window').width*0.55,
        borderRadius: 30,
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
        paddingBottom:5,
    },

    plantProperties:
    {
        color: '#777777',
        fontSize: 12,
        paddingTop:5,
        paddingBottom:10,
    },

    dash: {
        width: Dimensions.get('window').width*1,
        height: 1,
      },
}
)

export default PrzegladGatunku;