import React from 'react';
import Box from '../components/boxes';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert, TextInput, TouchableOpacity} from 'react-native';

const Registration = () =>
{
    const [name, onChangeName] = React.useState(null);
    const [secondName, onChangeSecondName] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [pass, onChangePass] = React.useState(null);
    const [pass2, onChangePass2] = React.useState(null);

    return(
        <ScrollView>
            <View style = {styles.container2}>
          <Text style = {styles.intro_text}>Zarejestruj się w SmartPlant!</Text>
          </View>

          <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Imię"
        keyboardType="default"
      />

<TextInput
        style={styles.input}
        onChangeText={onChangeSecondName}
        value={secondName}
        placeholder="Nazwisko"
        keyboardType="default"
      />

<TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Adres e-mail"
        keyboardType="email-address"
      />

<TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={onChangePass}
        value={pass}
        placeholder="Hasło"
        keyboardType="default"
      />

<TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={onChangePass2}
        value={pass2}
        placeholder="Powtórz hasło"
        keyboardType="default"
      />

<View style={styles.container2}>
        <TouchableOpacity onPress={() => {alert('Niedługo obsłużę bazę danych!');}}>
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