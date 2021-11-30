import React, { useState } from 'react';
import { Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity, Alert,
    Keyboard, TouchableWithoutFeedback} from 'react-native';
import {default as axios} from "axios";
import IP from '../constants/ip';
import Colors from '../constants/colors';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Box from '../components/boxes';

const DodawanieRosliny = () =>
{

    const [plantName, setPlantName] = useState('');
    const [species, setSpecies] = useState();
    const [sensor, setSensor] = useState();

    ///const [speciesTest, setSpeciesTest] = useState();

    const [isFocus, setIsFocus] = useState(false);
    const [dropdownSpecies, setDropdownSpecies] = useState();

    //----------------------------------------------------------------
   
    const [seedingDate, setSeedingDate] = useState(new Date());
    const [seedingDateAndroid, setSeedingDateAndroid] = useState(null);

    const [fertilizationDate, setFertilizationDate] = useState(new Date());
    const [fertilizationDateAndroid, setFertilizationDateAndroid] = useState(null);


    const onChangeSeedingDate = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setSeedingDate(currentDate);
    };

    const onChangeSeedingDateAndroid = (date) =>
    {
      setSeedingDateAndroid(date);
    };

    const onChangeFertilizationDate = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setFertilizationDate(currentDate);
    };

    const onChangeFertilizationDateAndroid = (date) =>
    {
      setFertilizationDateAndroid(date);
    };

    const nameInputHandler = (enteredName) => {
        setPlantName(enteredName);
      };

    const sensorIdHandler = (enteredId) => {
        setSensor(enteredId);
    }

    const dropdownSpeciesHandler = (specie) =>
    {
      setDropdownSpecies(specie);
    }

      axios.get("http://"+ IP.ip +"/plants").then(resp => {
    const plants_array =[{}]=resp.data;

   // let species_array = new Map();
    //for (let i =0; i<405; i++)
    //{
    //  species_array.set(i, plants_array[i].Nazwapolska)
   // }

   // setSpeciesTest(species_array);
    setSpecies(plants_array);});

    let datePicker;
    let datePicker2;

   if( Platform.OS === 'ios')
   {
     datePicker =(
       <>
      <Text style={styles.text}>4. Dodaj datę ostatniego przesadzania rośliny bądź datę zakupu.</Text>
      <View style={styles.datePicker}>    
      <DateTimePicker
          testID="dateTimePicker"
          value={seedingDate}
          mode='date'
          display="default"
          onChange={onChangeSeedingDate}
          themeVariant="light" 
        />
        </View>
        </>
     )
   }else{
     datePicker=(
       <>
        <Text style={styles.text}>4. Wpisz datę ostatniego przesadzania rośliny bądź datę zakupu w formacie RRRRMMMDD np. 20211128.</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeSeedingDateAndroid}
        value={seedingDateAndroid}
        placeholder="Wpisz datę we właściwym formacie"
        keyboardType = 'numeric'
        maxLength={8}
      />
       </>
     )
   }

   if( Platform.OS === 'ios')
   {
     datePicker2 =(
       <>
      <Text style={styles.text}>5. Dodaj datę ostatniego nawożenia rośliny (jeżeli nie pamiętasz lub nie nawoziłeś nigdy swojej rośliny, to wpisz dzisiejszą datę.</Text>
      <View style={styles.datePicker}>    
      <DateTimePicker
          testID="dateTimePicker"
          value={fertilizationDate}
          mode='date'
          display="default"
          onChange={onChangeFertilizationDate}
          themeVariant="light" 
        />
        </View>
        </>
     )
   }else{
     datePicker2=(
       <>
        <Text style={styles.text}>5. Wpisz datę ostatniego nawożenia rośliny (jeżeli nie pamiętasz lub nie nawoziłeś nigdy swojej rośliny, to wpisz dzisiejszą datę w formacie RRRRMMMDD np. 20211128.</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeFertilizationDateAndroid}
        value={fertilizationDateAndroid}
        placeholder="Wpisz datę we właściwym formacie"
        keyboardType = 'numeric'
        maxLength={8}
      />
       </>
     )
   }

   //console.log(speciesTest);


    return(
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Dodaj nową roślinkę!</Text>
            <Text style={styles.text}>1. Wpisz nazwę swojej rośliny.</Text>
            <TextInput
        style={styles.input}
        onChangeText={nameInputHandler}
        value={plantName}
        placeholder="np. Zamiokulkas Salon"
        keyboardType="default"
      />
      <Text style={styles.text}>2. Wybierz gatunek rośliny.</Text>
      <Dropdown
      style={styles.input}
      placeholderStyle={styles.dropdownText}
      activeColor={Colors.LightGreen}
      data={species}
          search
          maxHeight={300}
          labelField="Nazwapolska"
          valueField="idgatunku"
          placeholder={!isFocus ? 'Wybierz gatunek...' : dropdownSpecies}
          searchPlaceholder="Szukaj..."
          value={dropdownSpecies}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setDropdownSpecies(item.value);
            setIsFocus(false);
          }}
      />

        <Text style={styles.text}>3. Wybierz numer ID miernika wilgoci, który znajduje się w doniczce Twojej roślinki.</Text>

        <TextInput
        style={styles.input}
        onChangeText={sensorIdHandler}
        value={sensor}
        placeholder="wpisz numer ID Twojego czujnika"
        keyboardType = 'numeric'
        maxLength={2}
      />

             {datePicker}
             {datePicker2}

             <TouchableOpacity style={styles.box} onPress={() => Alert.alert('Soon')}>
                 <Box colorHex={Colors.LightGreen} colorTextHex={Colors.Green} TextInside="Dodaj roślinę" ></Box>
                 </TouchableOpacity>
        </ScrollView>
           );

}

const styles = StyleSheet.create(
    {
        header:
        {
          color: Colors.Green,
            fontSize: 25,
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 20,

        },
        text:
        {
            color: Colors.Green,
            fontSize: 17,
        },

        input: {
            height: 40,
            marginTop: 10,
            marginBottom: 15,
            borderWidth: 1,
            paddingHorizontal: 10,
            borderColor: Colors.Grey,
            borderRadius: 10,
            
          },
          container: {
            flex: 1,
           padding: 20,
            //height: Dimensions.get('window').width*0.6,
            //width: Dimensions.get('window').width*0.6,
          },

          flexbox:
          {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',

          },

          dropdownText:
          {
            color: Colors.Grey,


          },

          dateText:
          {
            fontSize: 17,
              color: Colors.PastelGreen,
              fontWeight: 'bold',

          },

          datePicker:
          {
            marginTop:10,
            marginBottom: 15,
            flex: 1,
          },

          box:
          {
            marginBottom:40,
            
          }
        });

       


export default DodawanieRosliny;