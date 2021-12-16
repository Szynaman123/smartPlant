import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Alert,
    Dimensions,
} from 'react-native';
import {default as axios} from "axios";
import IP from '../constants/ip';
import Box from '../components/boxes';
import Colors from '../constants/colors';

const PrzegladRosliny = () =>{

    const idRosliny = 1;

    const [plantName, setPlantName] = useState();
    const [speciesName, setSpeciesName] = useState();
    const [sensorId, setSensorId] = useState();
    const [sensorHumidity, setSensorHumidity] = useState();
    const [seedingDate, setSeedingDate] = useState();
    const [fertilizationDate, setFertilizationDate] = useState();
    const [wateringDate, setWateringDate] = useState();

    const [sensors, setSensors] = useState();

    axios.get("http://"+ IP.ip +"/userplants").then(resp => {
    const plants_array =[{}]=resp.data;

    setPlantName(plants_array[idRosliny-1].nazwa);
    setSpeciesName(plants_array[idRosliny-1].gatunek);
    setSensorId(plants_array[idRosliny-1].sensor_id);
    
    setWateringDate(plants_array[idRosliny-1].data_podlewania);
    setSeedingDate(plants_array[idRosliny-1].data_przesadzania);
    setFertilizationDate(plants_array[idRosliny-1].data_nawozenia);
    setSensorId(plants_array[idRosliny-1].sensor_id);
    });

    axios.get("http://"+ IP.ip +"/sensors").then(resp => {
    const sensors_array =[{}]=resp.data;

    setSensorHumidity(sensors_array[sensorId].humidity);
    });

    const formatDate = (date) =>
    {
        let sd = date ? date.toString() : '';
        let formatedDate = [];
        for (let i =0; i<10; i++)
        {
            formatedDate.push(sd[i]);
        }
        let joinDate = formatedDate.join("");
        let stringDate = joinDate.toString();
  
        return stringDate;
    };

    const today = new Date();

    const updateWateringDate = async () =>
    {

              Alert.alert(
            "Dzięki za podlanie!",
            "Zmieniono datę podlewania na dzisiejszą",
        );
        const axios = require('axios').default;
        const res = await axios.put("http://"+ IP.ip +"/userplants/podlej/"+ idRosliny + "", { data_podlewania: today}).then(resp => {
          console.log(response);      
        });
    }
        
    let plant;

    plant = (
        <>
         <View style={styles.flexbox2}>
                    <Image style={styles.plantPic} source={require('../assets/plant.png')}/>
                    <View style={styles.flexbox1}>
                        <Text style={styles.plantNameText}>{plantName}</Text>
                        <Text style={styles.gatunekText}>{speciesName}</Text>
                    </View>
                </View>
                <View style={styles.flexbox4}>
                <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Wilgotność</Text>
                        <Text style={styles.propertiesTextGreen}>{sensorHumidity}%</Text>
                    </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Data ostatniego podlewania</Text>
                        <Text style={styles.propertiesTextGreen}>{formatDate(wateringDate)}</Text>
                    </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Data ostatniego przesadzania</Text>
                        <Text style={styles.propertiesTextGreen}>{formatDate(seedingDate)}</Text>
                    </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Data ostatniego nawożenia</Text>
                        <Text style={styles.propertiesTextGreen}>{formatDate(fertilizationDate)}</Text>
                    </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Konieczne do podjęcia kroki</Text>
                        <Text style={styles.propertiesTextGreen}>Brak</Text>
                    </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <TouchableOpacity onPress={updateWateringDate}>
                        <Box colorHex={Colors.Green} colorTextHex={Colors.VeryLightGrey} TextInside="Podlej" ></Box>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Alert.alert('Soon', 'soon')}>
                        <Box colorHex={Colors.Green} colorTextHex={Colors.VeryLightGrey} TextInside="Nawieź" ></Box>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Alert.alert('Soon', 'soon')}>
                        <Box colorHex={Colors.Green} colorTextHex={Colors.VeryLightGrey} TextInside="Przesadź" ></Box>
                        </TouchableOpacity>
                    </View>
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
            justifyContent: 'space-evenly',
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
            paddingVertical: 10,
            textDecorationLine: 'underline',
        }
    }
)

export default PrzegladRosliny;