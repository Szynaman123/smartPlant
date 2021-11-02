import React from 'react';
import Box from '../components/boxes';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
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
const Login = ({navigation}) =>
{

    const [email, onChangeEmail] = React.useState(null);
    const [pass, onChangePass] = React.useState(null);

    return(
        <ScrollView>
            <View style = {styles.container2}>
                <Text style = {styles.intro_text}>Zaloguj się do SmartPlant!</Text>
            </View>

            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Adres e-mail"
                keyboardType="default"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangePass}
                value={pass}
                placeholder="Haslo"
                keyboardType="default"
            />
            <View style = {styles.mountaincontainer} >
                <Image style = {styles.logo}
                       source={require('../assets/pic.png')}
                />
            </View>
            <View style = {styles.buttonOnTop} >
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Box colorHex="#98BF63" colorTextHex="#F9F9F9" TextInside="Zaloguj" width={100}></Box>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};


export default Login;