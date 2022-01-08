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
import { useId } from '../context/LoginProvider';
import { useInitial } from '../context/LoginProvider';



const PrzegladRosliny = () =>{

    const { plantId, setIsPlantChosen, idSpecies, setIdSpecies, setIsChosen, sensorId } = useId();
    const { setInitial } = useInitial();


    const [plantName, setPlantName] = useState();
    const [speciesName, setSpeciesName] = useState();
    const [speciesId, setSpeciesId] = useState();
    const [sensorHumidity, setSensorHumidity] = useState();
    const [seedingDate, setSeedingDate] = useState();
    const [fertilizationDate, setFertilizationDate] = useState();
    const [wateringDate, setWateringDate] = useState();

    axios.get("http://"+ IP.ip +"/userplants/"+ plantId).then(resp => {
    const plant = [{}] = resp.data;

    setPlantName(plant[0].nazwa);
    setSpeciesName(plant[0].gatunek);
    
    setWateringDate(plant[0].data_podlewania);
    setSeedingDate(plant[0].data_przesadzania);
    setFertilizationDate(plant[0].data_nawozenia);
    });

    axios.get("http://"+ IP.ip +"/sensors/" + sensorId).then(resp => {
    const sensor =[{}]=resp.data;

    setSensorHumidity(sensor[0].humidity);
    });

    axios.get("http://"+ IP.ip +"/plants/nazwa/" + speciesName).then(resp => {
    const id = resp.data;
    setSpeciesId(id);

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
        const res = await axios.put("http://"+ IP.ip +"/userplants/podlej/"+ plantId + "", { data_podlewania: today}).then(resp => {
          console.log(response);  
        });

        window.location.reload(false);

    }

    const updateSeedingDate = async () =>
    {

              Alert.alert(
            "Dzięki za przesadzenie mnie!",
            "Zmieniono datę ostatniego przesadzania na dzisiejszą",
        );
        const axios = require('axios').default;
        const res = await axios.put("http://"+ IP.ip +"/userplants/przesadz/"+ plantId + "", { data_przesadzania: today}).then(resp => {
          console.log(response);      
        });

        window.location.reload(false);
    }

    const updateFertilizationDate = async () =>
    {

              Alert.alert(
            "Dzięki za nawóz - od razu lepiej!",
            "Zmieniono datę ostatniego nawozenia na dzisiejszą",
        );
        const axios = require('axios').default;
        const res = await axios.put("http://"+ IP.ip +"/userplants/nawiez/"+ plantId + "", { data_nawozenia: today}).then(resp => {
          console.log(response);      
        });

        window.location.reload(false);
    }

    const goBackButton = () =>
    {
        setIsPlantChosen(false);
        setInitial('MojeRosliny');
    }

    const onPressStack = (id) =>
    {
        setIsChosen(true);
        setIdSpecies(id);
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
                        <TouchableOpacity onPress={updateFertilizationDate}>

                        <Box
                        colorHex={Colors.Green}
                        colorTextHex={Colors.VeryLightGrey}
                        TextInside="Nawieź" >
                        </Box>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={updateSeedingDate}>
                        <Box colorHex={Colors.Green} colorTextHex={Colors.VeryLightGrey} TextInside="Przesadź" ></Box>
                        
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => onPressStack(speciesId)}>
                    <Text style={styles.czytajWiecej}>Czytaj więcej o pielęgnacji tego gatunku...</Text>
                    </TouchableOpacity>
                </View>
        </>
    )

    return(
        <ScrollView>
            <TouchableOpacity onPress={goBackButton}>
                <Text style={styles.propertiesText}> Powrót do listy</Text>    
            </TouchableOpacity>
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
            flex:0.8,
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