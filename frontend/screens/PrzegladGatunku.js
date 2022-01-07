import React, {useState} from 'react';
import Colors from '../constants/colors';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity, 
    Dimensions
} from 'react-native';
import {default as axios} from "axios";
import IP from '../constants/ip';
import { useId } from '../context/LoginProvider';
import { useInitial } from '../context/LoginProvider';

const PrzegladGatunku = () =>
{
    const { idSpecies, setIsChosen, setIsPlantChosen, isLoggedIn, isPlantChosen, isChosen } = useId();
    const { setInitial } = useInitial();

    const idGatunku = idSpecies; //tu wybieram se Id gatunku, o ktorym chce wyświetlać info na ekranie (rozwiązanie chwilowe)

    ///////Poniżej useStaty, w których zapisujemy informacje z bazy w zależności od wybranego ID//////
    const [nazwaPL, setNazwaPL] = useState('');
    const [nazwaLac, setNazwaLac] = useState('');
    const [position, setPosition] = useState('');
    const [temperature, setTemperature] = useState('');
    const [watering, setWatering] = useState('');
    const [fertilization, setFertilization] = useState('');
    const [replanting, setReplanting] = useState('');
    const [pests, setPests] = useState('');
    const [humiditySummer, setHummiditySummer] = useState('');
    const [humidityWinter, setHummidityWinter] = useState('');

    /////Pobieramy dane z bazy, następnie pobrane dane zapisujemy do use State/////
    axios.get("http://"+ IP.ip +"/plants").then(resp => {
    const plants_array =[{}]=resp.data;
    //const plantName = plants_array[idGatunku].Nazwapolska;
    setNazwaPL(plants_array[idGatunku].Nazwapolska);
    setNazwaLac(plants_array[idGatunku].Nazwalacina);
    setPosition(plants_array[idGatunku].stanowisko);
    setTemperature(plants_array[idGatunku].temperatura);
    setWatering(plants_array[idGatunku].podlewanie);
    setFertilization(plants_array[idGatunku].nawozenie);
    setReplanting(plants_array[idGatunku].przesadzanie);
    setPests(plants_array[idGatunku].szkodniki);
    setHummiditySummer(plants_array[idGatunku].wilgotnosc_lato);
    setHummidityWinter(plants_array[idGatunku].wilgotnosc_zima);
});

///Zmienne, które potrzebne są nam do przypisania do nich wartości state'a////
    let plantname;
    let plantnamelatin;
    let plantStanowisko;
    let plantTemperature;
    let plantPodlewanie;
    let plantNawozenie;
    let plantPrzesadzanie;
    let plantSzkodniki;
    let plantWilgotnoscLato;
    let plantWilgotnoscZima;

    const toPercents = (variable) =>
    {
        variable = variable.replace(',','.')
        var integer = Number(variable);
        integer = integer * 100;
        return integer;
    }

    ////Przypisujemy do zmiennych komponenty text, które zawierają w sobie wartości UseStatów, które nadaliśmy powyżej////
    /// w returnie musimy w odpowiednim miejscu po prostu przekazać te zmienne - np {plantname}////
        plantname = 
          (<Text>{nazwaPL}</Text>);
        plantnamelatin =
        (<Text>{nazwaLac}</Text>);
        plantStanowisko = 
        (<Text>{position}</Text>);
        plantTemperature = 
        (<Text>{temperature}</Text>);
        plantPodlewanie = 
        (<Text>{watering}</Text>);
        plantNawozenie = 
        (<Text>{fertilization}</Text>);
        plantPrzesadzanie =
        (<Text>{replanting}</Text>);
        plantSzkodniki = 
        (<Text>{pests}</Text>);
        plantWilgotnoscLato = 
        (<Text>{toPercents(humiditySummer)}</Text>);
        plantWilgotnoscZima =
        (<Text>{toPercents(humidityWinter)}</Text>);

        /*let goBackButtonText;
        const setGoBackButtonText = () =>
        {
            if((isLoggedIn === true) && (isPlantChosen === true) && (isChosen === true))
            {
                goBackButton = "Powrót do listy moich roślin";
            }
            else if((isLoggedIn === true) && (isChosen === true))
            {
                goBackButton = "Powrót do listy gatunków";
            }

        }*/


    const goBackButton = () =>
    {
        if((isLoggedIn === true) && (isPlantChosen === true) && (isChosen === true))
        {
            setIsChosen(false);
            setIsPlantChosen(false);
            setInitial('MojeRosliny');

        }
        else if((isLoggedIn === true) && (isChosen === true))
        {
        setIsChosen(false);
        setInitial('Gatunki');
        }
    }

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
            <TouchableOpacity onPress={goBackButton}>
                <Text style={styles.plantProperties}>Powrót do listy</Text>    
            </TouchableOpacity>
                <View style={styles.flexbox2}>
                    <Text style={styles.titleText}>{plantname}</Text>
                    <Text style={styles.titleSecondText}>{plantnamelatin}</Text>
                    <Image style={styles.plantPic} source={require('../assets/plant.png')}/>
                </View>
                <View style={styles.flexbox3}>
                    <Text style={styles.plantPropertiesTitle}>Stanowisko</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>{plantStanowisko}</Text>

                    <Text style={styles.plantPropertiesTitle}>Temperatura pomieszczenia</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>{plantTemperature}</Text>

                    <Text style={styles.plantPropertiesTitle}>Podlewanie</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>{plantPodlewanie}</Text>

                    <Text style={styles.plantPropertiesTitle}>Nawożenie</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>{plantNawozenie}</Text>

                    <Text style={styles.plantPropertiesTitle}>Przesadzanie</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>{plantPrzesadzanie}</Text>

                    <Text style={styles.plantPropertiesTitle}>Szkodniki i inne zagrożenia</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>{plantSzkodniki}</Text>

                    <Text style={styles.plantPropertiesTitle}>Optymalna wilgotność ziemi w okresie letnim</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>{plantWilgotnoscLato}%</Text>

                    <Text style={styles.plantPropertiesTitle}>Optymalna wilgotność ziemi w okresie zimowym</Text>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <Text style={styles.plantProperties}>{plantWilgotnoscZima}%</Text>

                </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({

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
        width: Dimensions.get('window').width*0.6,
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