import React, {useState} from 'react';
import Box from '../components/boxes';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity, Alert,
    Dimensions,
} from 'react-native';
import {default as axios} from "axios";
import IP from '../constants/ip'


const PrzegladRosliny = () =>{

    /*const dodajrosline =() =>
    {
        
    const newRoslina1= {
            'idrosliny': 3,
            'nazwa': 'Andrzej the plant',
            'idgatunku': 344,
            'idczujnika': 3,
    }

    const axios = require('axios').default;
    const res = axios.post('http://192.168.0.111:3000/userplants', newRoslina1).then((response) => {
            console.log(response);})
}*/

    const idRosliny = 1;

    const [plantName, setPlantName] = useState();
    const [speciesId, setSpeciesId] = useState();
    const [sensorId, setSensorId] = useState();

    axios.get("http://"+ IP.ip +"/userplants").then(resp => {
    const plants_array =[{}]=resp.data;

    setPlantName(plants_array[idRosliny].nazwa);
    setSpeciesId(plants_array[idRosliny].idgatunku);
    setSensorId(plants_array[idRosliny].idczujnika);
});

    let plant;

    plant = (
        <>
         <View style={styles.flexbox2}>
                    <Image style={styles.plantPic} source={require('../assets/plant.png')}/>
                    <View style={styles.flexbox1}>
                        <Text style={styles.plantNameText}>{plantName}</Text>
                        <Text style={styles.gatunekText}>{speciesId}</Text>
                    </View>
                </View>
                <View style={styles.flexbox4}>
                <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Wilgotność</Text>
                        <Text style={styles.propertiesTextGreen}>75%</Text>
                    </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Data ostatniego przesadzania</Text>
                        <Text style={styles.propertiesTextGreen}>25.05.2020</Text>
                    </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Data ostatniego nawożenia</Text>
                        <Text style={styles.propertiesTextGreen}>11.11.2021</Text>
                    </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Konieczne do podjęcia kroki</Text>
                        <Text style={styles.propertiesTextGreen}>Brak</Text>
                    </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <TouchableOpacity onPress={() => Alert.alert('Soon', 'soon')}>
                    <Text style={styles.czytajWiecej}>Czytaj więcej o pielęgnacji tego gatunku...</Text>
                    </TouchableOpacity>
                </View>
        </>
    )

    return(
        <ScrollView>
            <View style={styles.flexbox1}>
               
               {plant}
            </View>
        </ScrollView>

    );

}

const styles = StyleSheet.create(
    {
        flexbox1:
        {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 20,
        },

        flexbox2: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingBottom: 20,
        },

        flexbox3:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',  
            paddingVertical:10, 
        },

        flexbox4:
        {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',

        },

        dash: {
            width: Dimensions.get('window').width*1,
            height: 1,
            marginHorizontal: -20,

          },

        plantPic:
        {
            height: Dimensions.get('window').width*0.45,
            width: Dimensions.get('window').width*0.35,
            borderRadius: 30,
        },

        plantNameText:
        {
            color: '#98BF63',
            fontSize: 20,
            paddingVertical: 10,
        },

        gatunekText:
        {
            color: '#777777',
            fontSize: 13,
            fontStyle: 'italic',
        },

        propertiesText:
        {
            color: '#777777',
            fontSize: 15,
            flex:1,
        },

        propertiesTextGreen:
        {
            color: '#98BF63',
            fontSize: 15,
            fontWeight: 'bold',
            flex: 1,
        },

        czytajWiecej:
        {
            color: '#777777',
            fontSize: 14,
            paddingVertical: 50,
            textDecorationLine: 'underline',
        }


    }
)

export default PrzegladRosliny;