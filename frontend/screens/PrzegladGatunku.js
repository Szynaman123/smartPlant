import React, {useState} from 'react';
import Box from '../components/boxes';
import Colors from '../constants/colors';
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
    const gettingData = async () =>
    {
        const axios = require('axios').default;
    
    const res = await axios.get("http://192.168.0.21:3000/plants").then(resp => {
    const plants_array =[{}]=resp.data;});

    return plants_array[2].Nazwapolska;

    };
    
            
    const [nazwaPL, setNazwaPL] = useState('');

    setNazwaPL(gettingData());

    /*const onLoad = async () => {

        //const [nazwaPL, getNazwaPL] = useState('');

        const axios = require('axios').default;
    
            const res = await axios.get("http://192.168.0.21:3000/plants").then(resp => {
            //console.log(resp.data);
            //console.log(typeof resp.data);
            const plants_array =[{}]=resp.data;
            //console.log(plants_array[2].przesadzanie);

            console.log(plants_array[1].Nazwapolska)

            //nazwaPL = getNazwaPL(plants_array[1].Nazwapolska);
            //console.log(nazwaPL);
            ;})}*/

    return(
        <ScrollView>
                <View style={styles.flexbox2}>
                    <Text style={styles.titleText}>{nazwaPL}</Text>
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
        color: Colors.Green,
        fontSize: 20,
    },

    titleSecondText:
    {
        color: Colors.DarkGrey,
        fontSize: 14,
        fontStyle: 'italic',
        paddingVertical: 10,
    },

    plantPropertiesTitle:
    {
        color: Colors.DarkGrey,
        fontSize: 14,
        paddingTop: 15,
        paddingBottom:5,
    },

    plantProperties:
    {
        color: Colors.DarkGrey,
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