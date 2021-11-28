import React, { useState } from 'react';
import { Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    Button,
    Image,
    TouchableOpacity, Alert,
    Dimensions} from 'react-native';
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

    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null);

    //----------------------------------------------------------------
   
    const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }};

  
    //----------------------------------------------------------------

    const nameInputHandler = (enteredName) => {
        setPlantName(enteredName);
      };

    const sensorIdHandler = (enteredId) => {
        setSensor(enteredId);
    }

      axios.get("http://"+ IP.ip +"/plants").then(resp => {
    const plants_array =[{}]=resp.data;
    setSpecies(plants_array);});


    return(
        <ScrollView style={styles.container}>
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
      data={species}
          search
          maxHeight={300}
          labelField="Nazwapolska"
          valueField="idgatunku"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
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
      <Text style={styles.text}>4. Dodaj datę ostatniego przesadzania rośliny bądź datę zakupu.</Text>

      <View>
      
      
      <View style={styles.container}>
      {/* Display the selected date */}
      <View style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={styles.btnContainer}>
          <Button title="Show Picker" color="purple" onPress={showPicker} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
      
    </View>
        </ScrollView>

    );

}

const styles = StyleSheet.create(
    {

        text:
        {
            color: Colors.Green,
            fontSize: 15,
            paddingHorizontal:20,
            paddingTop: 20,
        },

        input: {
            height: 40,
            margin: 12,
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
        
          text: 
          {
              fontSize: 15,
              color: Colors.PastelGreen,
          },
          pickedDateContainer: {
            padding: 20,
            backgroundColor: '#eee',
            borderRadius: 10,
          },
          pickedDate: {
            fontSize: 18,
            color: 'black',
          },
          btnContainer: {
            padding: 30,
          },
          // This only works on iOS
          datePicker: {
            width: 320,
            height: 260,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
        });


export default DodawanieRosliny;