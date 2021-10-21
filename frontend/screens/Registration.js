import React, {useState} from 'react';
import Box from '../components/boxes';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert, TextInput, TouchableOpacity} from 'react-native';

const Registration = () =>
{
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

    const nameInputHandler = (enteredName) => {
      setName(enteredName);
    };

    const secondNameInputHandler = (enteredSecondName) => {
      setSecondName(enteredSecondName);
    };

    const emailInputHandler = (enteredEmail) => {
      setEmail(enteredEmail);
    };

    const passInputHandler = (enteredPass) => {
      setPass(enteredPass);
    };

    const pass2InputHandler = (enteredPass2) => {
      setPass2(enteredPass2);
    };

    const showData = () => {
      if (pass2 != pass){
        return (
            console.log("Hasła nie są takie same")
        )}
      console.log(name);
      console.log(secondName);
      console.log(email);
      console.log(pass);
      console.log(pass2);
    };

    return(
        <ScrollView>
            <View style = {styles.container2}>
          <Text style = {styles.intro_text}>Zarejestruj się w SmartPlant!</Text>
          </View>

          <TextInput
        style={styles.input}
        onChangeText={nameInputHandler}
        value={name}
        placeholder="Imię"
        keyboardType="default"
      />

<TextInput
        style={styles.input}
        onChangeText={secondNameInputHandler}
        value={secondName}
        placeholder="Nazwisko"
        keyboardType="default"
      />

<TextInput
        style={styles.input}
        onChangeText={emailInputHandler}
        value={email}
        placeholder="Adres e-mail"
        keyboardType="email-address"
      />

<TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={passInputHandler}
        value={pass}
        placeholder="Hasło"
        keyboardType="default"
      />

<TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={pass2InputHandler}
        value={pass2}
        placeholder="Powtórz hasło"
        keyboardType="default"
      />

      <View style={styles.container2}>
        <TouchableOpacity onPress={showData}>

      <Box colorHex="#98BF63" colorTextHex="#F9F9F9" TextInside="Załóż konto!"></Box>
      </TouchableOpacity>
      </View>
          </ScrollView>
        
        );
};

const styles =StyleSheet.create({

    container2: {
        paddingHorizontal: 10,
        paddingTop:20,
        marginBottom: 10,
      },

      intro_text:
    {
      textAlign: 'center',
      color: '#98BF63', 
      fontSize: 20,
      lineHeight:22,
      letterSpacing: 0.05,
    },

    container_background: {
        backgroundColor: 'white',
        marginBottom: 100,
        },

        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderColor: '#B9B9B9',
            borderRadius: 10,
          },

});

export default Registration;