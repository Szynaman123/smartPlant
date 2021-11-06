import React, {useState} from 'react';
import Box from '../components/boxes';
import post, {default as axios} from 'axios';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert, TextInput, TouchableOpacity} from 'react-native';


const Registration = ({navigation}) =>
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

    const showPassAlert = () =>
  Alert.alert(
    "Hasła nie są takie same!",
    "Hasła muszą być takie same.",
  );

  const showEmailAlert = () =>
  Alert.alert(
    "Wprowadzono niepoprawny mail",
    "Jesteś pewny, że wpisałeś odpowiedni adres email?",

  );

  const showSuccessAlert = () =>
  Alert.alert(
    "Utworzono konto",
    "Konto zostało utworzone! Możesz się zalogować.",
    navigation.navigate('Login'),
  );

  const showErrorAlert = () =>
  Alert.alert(
    "Błąd",
    "Konto nie zostało utworzone. Spróbuj ponownie.",
  );

    const showMailErrorAlert = () =>
        Alert.alert(
            "Błąd",
            "Konto o podanym adresie e-mail juz istnieje.",
        );

        const emptyInputsError = () =>
        Alert.alert(
          "Nie uzupełniono wszystkich danych",
          "Należy uzupełnić wszystkie pola.",
        );
        
    const createAccount = async () =>{
        const newUser = {
        firstname: name,
        surname: secondName,
        mail: email,
        password: pass,
    };

        const res = await axios.post('http://192.168.1.20:3000/users', newUser)
            .then((response) => {
                showSuccessAlert();
                console.log(response);
            }, (error) => {
                console.log(error);
                showErrorAlert();
            });}
    const showData = async () => {
      if (pass2 != pass){
        return (
            showPassAlert()
        )}
        if (email.includes("@")==false)
        {
          return(
            showEmailAlert()
          )
        }
        if(name == "" || secondName == "" || email =="" || pass=="")
        {
          return(
            emptyInputsError()
          )
        }

      const axios = require('axios').default;

        const re = await axios.get("http://192.168.1.20:3000/users").then(resp => {

            console.log(resp.data);// laduje surowe dane
            //console.log(typeof resp.data);//dane sa typu obiekt
            const arr =[{},{}]=resp.data;//tablica obiektow zaincludowama zwracanymi danymi
            //console.log(typeof arr); //dane sa nadal typu obiekt
            //console.log(arr[0].firstname);//natalia
            //console.log(arr[0].mail);//porczynska..
            //console.log(arr[0].password);
            console.log({email});//wprowadzony mail obiekt

            const mailObject = {} ={email};//nowy obiekt zaincludowany obiektem mail

            const wprowadzonyMail =mailObject.email;
            //console.log(wprowadzonyMail);//wprowadzony mail string

            let czymailistnieje = false;
            for (let i=0; i<arr.length; i++)
            {
                if (arr[i].mail === wprowadzonyMail) czymailistnieje = true;
            }
            if(czymailistnieje) {showMailErrorAlert()} else {createAccount()} ;
        });
      }



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