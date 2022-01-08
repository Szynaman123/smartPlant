import React, {Profiler, useState} from 'react';
import Colors from '../constants/colors';
import { Text, View, Dimensions, StyleSheet, ScrollView, Image,} from 'react-native';
import { useLogin } from './../context/LoginProvider';
import colors from '../constants/colors';

const notificationscreen = props =>
{
    const { setIsLoggedIn, profile } = useLogin();
    return(
        <ScrollView>
            <View style={styles.flexbox}>
            <View style={styles.helloView}>
            <Text style={styles.txtHello}>Witaj {profile.firstname}!</Text>
            <Image style={styles.hello} source={require('../assets/hello4.png')}/>
            <Text style={styles.greenTxt}>Jak odpowiednio zadbać o moje rośliny za pomocą aplikacji SmartPlant?</Text>
            <Text style={styles.propertiesText}>Aby dodać roślinę wybierz w menu opcję ‘Dodaj Roślinę’</Text>
            <Text style={styles.propertiesText}>Po dodaniu rośliny sprawdzaj jej parametry wilgotności oraz czytaj na temat pielęgnacji wybranego gatunku!</Text>
            <Text style={styles.propertiesText}>Aby sprawdzić jak się czuje Twoja roślina przejdź w zakładkę “Moje Rośliny’ i wybierz interesujący Cię egzemplarz.</Text>
            <Text style={styles.propertiesText}>Pamiętaj, aby po każdej czynności (podlaniu, nawożeniu czy przesadzaniu) zaznaczyć to na ekranie roślinki.</Text>
            <Text style={styles.propertiesText}>Kiedy wilgotność rośliny jest prawdiłowa wyświetla się ona na zielono:</Text>

            <View style={styles.flexbox4}>
                <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Wilgotność</Text>
                        <Text style={styles.propertiesTextGreen}>60%</Text>
            </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
            </View>

            <Text style={styles.propertiesText}>Kiedy wilgotność w doniczce jest zbyt wysoka wyświetla się ona na niebiesko:</Text>
            <View style={styles.flexbox4}>
                <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Wilgotność</Text>
                        <Text style={styles.propertiesTextBlue}>90%</Text>
            </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
            </View>

            <Text style={styles.propertiesText}>Roślina może być przelana! Zadbaj o to, aby odsączyć wodę z podstawka i osuszyć korzenie.</Text>

            <Text style={styles.propertiesText}>Kiedy wilgotność w doniczce jest za niska wyświetla się ona na czerwono:</Text>

            <View style={styles.flexbox4}>
                <Image style={styles.dash} source={require('../assets/dash.png')}/>
                    <View style={styles.flexbox3}> 
                        <Text style={styles.propertiesText}>Wilgotność</Text>
                        <Text style={styles.propertiesTextRed}>10%</Text>
            </View>
                    <Image style={styles.dash} source={require('../assets/dash.png')}/>
            </View>

            <Text style={styles.propertiesText}>Pora na podlanie rośliny. Pamiętaj, aby przeczytać w specyfikacji gatunku jak i jaką wodą należy podlać wybraną roślinkę!</Text>




            </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    flexbox:
    {
        alignItems: 'center',

    },
    helloView:
    {
        paddingVertical:50,
        paddingHorizontal:10,
  
    },
    hello:
    {
        width: Dimensions.get('window').width*0.9,
      height: Dimensions.get('window').width*0.6,
      marginVertical:30,
      zIndex: 1,
    },
    txtHello:
    {
        padding:30,
        marginBottom: -130,
        zIndex: 2,
        fontSize: 18,
        color: Colors.Green,
    },
    greenTxt:
    {
        color: colors.Green,
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 15,
        flex:1,
    },
    propertiesText:
    {
        color: Colors.DarkGrey,
        fontSize: 15,
        paddingBottom: 10,
        flex:1,
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
            marginHorizontal: -10,
            marginBottom: 10,

          },
        propertiesTextGreen:
        {
            color: Colors.Green,
            fontSize: 15,
            fontWeight: 'bold',
            flex: 1,
        },

        propertiesTextBlue:
        {
            color: 'blue',
            fontSize: 15,
            fontWeight: 'bold',
            flex: 1,
        },

        propertiesTextRed:
        {
            color: 'red',
            fontSize: 15,
            fontWeight: 'bold',
            flex: 1,
        },
});

export default notificationscreen;