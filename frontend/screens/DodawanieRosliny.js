import React, { useState } from 'react';
import { Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert } from 'react-native';
import IP from '../constants/ip';
import Colors from '../constants/colors';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Box from '../components/boxes';


const DodawanieRosliny = () =>
{
    const [plantName, setPlantName] = useState('');
    const [sensorID, setSensorID] = useState();
    const [species, setSpecies] = useState(); // ten usestate jest po to, aby wyjac dane z bazy
    const [sensors, setSensors] = useState();

    ///const [speciesTest, setSpeciesTest] = useState();

    const [isFocus, setIsFocus] = useState(false);
    const [dropdownSpecies, setDropdownSpecies] = useState(null); //tu chcemy zapisac to co uzytkownik wybierze aby wpisac to do bazy
    
    //----DO SENSORÓW JAK OGARNIEMY PODWOJNY GET------------------------------------------------------------
    /*const [isFocusSensors, setIsFocusSensors] = useState(false);
    const [dropdownSensor, setDropdownSensor] = useState(null);

    const sensorDropdown = async () =>
      {
        window.setTimeout('window.parent.generateOutput()', 1000);
        const axios = require('axios').default;
        const res = await axios.get("http://"+ IP.ip +"/sensors").then(resp => {
        let sensors_array=[{}]=resp.data;
        setSensors(sensors_array);});
    
         <Dropdown
      style={styles.input}
      placeholderStyle={dropdownSensor? styles.dropdownText2 : styles.dropdownText}
      activeColor={Colors.LightGreen}
      data={sensors}
          search
          maxHeight={300}
          labelField="sensor_id"
          valueField="sensor_id"
          placeholder={!isFocusSensors ? 'Wybierz id czujnika...' : dropdownSensor}
          searchPlaceholder="Szukaj..."
          value={dropdownSensor}
          onFocus={() => setIsFocusSensors(true)}
          onBlur={() => setIsFocusSensors(false)}
          onChange={
            sensorDropdown(),
            item => {
            setDropdownSensor(item.sensor_id);
            setIsFocusSensors(true);
          }}
      />
      
      */
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

      const sensorIdHandler = (ID) => {
        setSensorID(ID);
      }

      const speciesDropdown = async () =>
      {
        const axios = require('axios').default;
        const res = await axios.get("http://"+ IP.ip +"/plants").then(resp => {
        let plants_array=[{}]=resp.data;
        setSpecies(plants_array);});

      }
      

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

      const formatDate = (date) =>
      {
        let stringDate = date ? date.toString() : '';
    stringDate = stringDate.replace('Jan', '01');
    stringDate = stringDate.replace('Feb', '02');
    stringDate = stringDate.replace('Mar', '03');
    stringDate = stringDate.replace('Apr', '04');
    stringDate = stringDate.replace('May', '05');
    stringDate = stringDate.replace('Jun', '06');
    stringDate = stringDate.replace('Jul', '07');
    stringDate = stringDate.replace('Aug', '08');
    stringDate = stringDate.replace('Sep', '09');
    stringDate = stringDate.replace('Oct', '10');
    stringDate = stringDate.replace('Nov', '11');
    stringDate = stringDate.replace('Dec', '12');
   

    let day =[];
    let month =[];
    let year =[];

    month.push(stringDate[4]);
        month.push(stringDate[5]);
    
        day.push(stringDate[7]);
        day.push(stringDate[8]);

        year.push(stringDate[10]);
        year.push(stringDate[11]);
        year.push(stringDate[12]);
        year.push(stringDate[13]);

        let mongoDate=[];
        mongoDate.push(year);
        mongoDate.push('-');
        mongoDate.push(month);
        mongoDate.push('-');
        mongoDate.push(day);

        mongoDate = mongoDate.join("");

        mongoDate = mongoDate.replace(",", "");
        mongoDate = mongoDate.replace(",", "");
        mongoDate = mongoDate.replace(",", "");
        mongoDate = mongoDate.replace(",", "");
        mongoDate = mongoDate.replace(",", "");

        return mongoDate;

      }

      const formatedSeedingDate = formatDate(seedingDate);
      const formatedFertilizationDate = formatDate(fertilizationDate);

      const createUserPlant = async () =>{
        const newUserPlant = {
            nazwa: plantName,
            gatunek: dropdownSpecies,
            sensor_id: sensorID,
            data_przesadzania: seedingDate,
            data_nawozenia: fertilizationDate,
        }

        const axios = require('axios').default;
        const res = await axios.post("http://"+ IP.ip +"/plants", newUserPlant).then(resp => {
          console.log(response);
        });
    }

        //console.log(formatDate(fertilizationDate));
        //plantName
        //dropdownSpecies
        //sensorID
        //seedingDate
        //fertilizationDate

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
      placeholderStyle={dropdownSpecies? styles.dropdownText2 : styles.dropdownText}
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
          onChange={
            speciesDropdown(),
            item => {
            setDropdownSpecies(item.Nazwapolska);
            setIsFocus(true);
          }}
      />

        <Text style={styles.text}>3. Wpisz numer ID miernika wilgoci, który znajduje się w doniczce Twojej roślinki.</Text>
            <TextInput
        style={styles.input}
        onChangeText={sensorIdHandler}
        value={sensorID}
        placeholder="wpisz ID czujnika..."
        keyboardType="numeric"
        maxLength={2}
      />
             {datePicker}
             {datePicker2}


             <TouchableOpacity style={styles.box} onPress={createUserPlant}>
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
        dropdownText2:
            {
                color: '#000000',


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