import React, {useState} from 'react';
import Box from '../components/boxes';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity, Alert
} from 'react-native';
import {default as axios} from "axios";

const Login = ({navigation}) =>
{
    const [data, setData] = React.useState([]);
    const [email, onChangeEmail] = React.useState(null);
    const [haslo, onChangeHaslo] = React.useState(null);

    const emailInputHandler = (enteredEmail) => {
        onChangeEmail(enteredEmail);
    };

    const passInputHandler = (enteredHaslo) => {
        onChangeHaslo(enteredHaslo);
    };

    const showErrorAlert = () =>
        Alert.alert(
            "Blad logowania!",
            "Hasło lub login sa niepoprawne.",
        );

    const showSuccessAlert = () =>
        Alert.alert(
            "Logowanie zakonczone sukcesem",
            "Zostales przekierowany do swojego konta",
            navigation.navigate('MojeRosliny'),
        );

    const onPress = async () => {
        const axios = require('axios').default;
        const res = await axios.get("http://192.168.1.20:3000/users").then(resp => {

            console.log(resp.data);// laduje surowe dane
            console.log(typeof resp.data);//dane sa typu obiekt
            const arr =[{},{}]=resp.data;//tablica obiektow zaincludowama zwracanymi danymi
            console.log(typeof arr); //dane sa nadal typu obiekt
            console.log(arr[0].firstname);//natalia
            console.log(arr[0].mail);//porczynska..
            console.log(arr[0].password);
            console.log({email});//wprowadzony mail obiekt
            console.log({haslo});//wprowadzony pass obiekt
            const mailObject = {} ={email};//nowy obiekt zaincludowany obiektem mail
            const hasloObject ={}={haslo};

            const wprowadzonyMail =mailObject.email;
            console.log(wprowadzonyMail);//wprowadzony mail string

            const wprowadzoneHaslo= hasloObject.haslo;
            console.log(wprowadzoneHaslo);//wprowadzone haslo string

            let czyzaloguje = false;
            for (let i=0; i<arr.length; i++)
            {
                if ((arr[i].mail === wprowadzonyMail)&&(arr[i].password === wprowadzoneHaslo)) czyzaloguje = true;
            }
            if(czyzaloguje) {showSuccessAlert()} else {showErrorAlert()};
        });
    };
        return(
        <ScrollView>
            <View style = {styles.container2}>
                <Text style = {styles.intro_text}>Zaloguj się do SmartPlant!</Text>
            </View>

            <TextInput
                style={styles.input}
                onChangeText={emailInputHandler}
                value={email}
                placeholder="Adres e-mail"
                keyboardType="default"
            />

            <TextInput
                style={styles.input}
                onChangeText={passInputHandler}
                value={haslo}
                placeholder="Haslo"
                keyboardType="default"
            />
            <View style = {styles.mountaincontainer} >
                <Image style = {styles.logo}
                       source={require('../assets/pic.png')}
                />
            </View>
            <View style = {styles.buttonOnTop} >
                <TouchableOpacity onPress={onPress}>
                    <Box colorHex="#98BF63" colorTextHex="#F9F9F9" TextInside="Zaloguj" width={100}></Box>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles =StyleSheet.create({

    container: {
        paddingHorizontal: 30,
        paddingTop:30,
        marginBottom: 10,
    },
    container2: {
        paddingHorizontal: 10,
        paddingTop:20,
        marginBottom: 10,
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

    mountaincontainer:
        {
            marginTop: 80,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
        },

    text_intro:
        {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#98BF63',
            fontSize: 20,
        },

    logo_text:
        {
            textAlign: 'center',
            color: '#98BF63',
            fontSize: 36,
        },

    intro_text:
        {
            textAlign: 'center',
            color: '#98BF63',
            fontSize: 20,
            lineHeight:22,
            letterSpacing: 0.05,
        },

    logo:
        {
            justifyContent: 'center',
            display: "flex",
            width: 410,
            height: 410,
        },
    buttonOnTop:
        {
            marginTop: -155,
        }
});

export default Login;