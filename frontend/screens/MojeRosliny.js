import React, {useState} from 'react';
import Box from '../components/boxes';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity, FlatList,
    Dimensions,
} from 'react-native';
import {default as axios} from "axios";
import Colors from '../constants/colors';
import IP from '../constants/ip';

const MojeRosliny = () =>
{
    const [plantsArray, setPlantsArray] = useState();
    //const [speciesArray, setSpeciesArray] = useState();

    axios.get("http://"+ IP.ip +"/userplants").then(resp => {
    const plants_array =[{}]=resp.data;
    setPlantsArray(plants_array)});

    /*axios.get("http://"+ IP.ip +"/plants").then(resp =>{
        const species_array = [{}] = resp.data;

        const creatingListOfSpecies = () =>
        {
            const array = [];
            for (let i=0; i<species_array.length; i++)
            {
                array.push(species_array[i].Nazwapolska)
            }
            return array;
        }
        
       setSpeciesArray(creatingListOfSpecies);
    });
    
    //console.log(speciesArray)

    let species = speciesArray;
    */

    let plantList;

    

    plantList=(
        <FlatList 
        data={plantsArray}
        renderItem={({ item }) =>
         (<>
         <TouchableOpacity>
        <View style={styles.flexbox2}>
        <Image style = {styles.logo} source={require('../assets/pic.png')}/> 
        <View style={styles.flexbox3}> 
         <Text style={styles.text1}>{item.nazwa}</Text>
         <Text style={styles.text2}>Gatunek: </Text>
         </View> 
         </View>
         </TouchableOpacity>
         <Image style={styles.dash} source={require('../assets/dash.png')}/>
</>) }/>);
    

    return(
        <ScrollView>
            <View style={styles.flexbox1}>
                {plantList}
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
        color: Colors.DarkGrey,
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