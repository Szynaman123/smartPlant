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
    TouchableOpacity, Alert, Dimensions, ShadowPropTypesIOS,
} from 'react-native';
import Colors from '../constants/colors';
import {default as axios} from "axios";
import IP from '../constants/ip';
import { useId } from '../context/LoginProvider';


const Gatunki = () =>
{
    const [loaded, isLoaded] = useState(true)

    const { setIdSpecies, setIsChosen} = useId();

    const [plantsArray, setPlantsArray] = useState();

    axios.get("http://"+ IP.ip +"/plants").then(resp => {
    const plants_array =[{}]=resp.data;
    setPlantsArray(plants_array)});

    let plantList;

    
        const onPressStack = (id) =>
        {
            setIsChosen(true);
            setIdSpecies(id);

        }

        plantList=(
            <FlatList 
            data={plantsArray}
            renderItem={({ item }) =>
             (<>
             <TouchableOpacity onPress={ ()=> onPressStack(item.idgatunku) }>
            <View>
             <Text style={styles.text1}>{item.Nazwapolska}</Text>
             <Text style={styles.text2}>{item.Nazwalacina}</Text>
             </View>
             </TouchableOpacity>
             <Image style={styles.dash} source={require('../assets/dash.png')}/>
</>) }/>);

    

    


    /*const DodajGatunek = async () =>  {
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
       
        ;})}*/

    return(
        <ScrollView>
    <View style={styles.flexbox1}>
        <View style={styles.flexbox2}>
            
        {plantList}
           
        </View>
        <Image style={styles.dash} source={require('../assets/dash.png')}/>
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
        marginTop: 10,
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