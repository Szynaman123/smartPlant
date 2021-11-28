import React, { useState } from 'react';
import { Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    Image,
    TouchableOpacity, Alert,
    Dimensions} from 'react-native';
import {default as axios} from "axios";
import IP from '../constants/ip';
import Colors from '../constants/colors';
import { Dropdown } from 'react-native-element-dropdown';
import CalendarPicker from 'react-native-calendar-picker';


const DodawanieRosliny = () =>
{

    const [plantName, setPlantName] = useState('');
    const [species, setSpecies] = useState();
    const [sensor, setSensor] = useState();

    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null);



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
        <ScrollView>
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

        <CalendarPicker
          onDateChange={this.onDateChange}
        />

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


    }
)

export default DodawanieRosliny;