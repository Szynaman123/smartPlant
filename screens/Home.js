import React from 'react';
import Box from '../components/boxes';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Button, Alert, TouchableOpacity} from 'react-native';

const Home = ( {navigation} ) =>
{
    return(

          <ScrollView>
    
          <View style = {styles.container}>
           <Text style = {styles.logo_text}>Smart Plant</Text> 
          </View>
    
          <View style = {styles.container2}>
          <Text style = {styles.intro_text}>Twój osobisty asystent do pielęgnacji roślin</Text>
          </View>
    
          <View style = {styles.logocontainer}>
          <Image style = {styles.logo}
            source={require('../assets/Logo.png')}
          />
          </View>
    
          <View>
             <View>
             <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                 <Box colorHex="#EAF2E0" colorTextHex="#98BF63" TextInside="Rejestracja"></Box>
                 </TouchableOpacity>
         </View>

         <View>
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                 <Box colorHex="#98BF63" colorTextHex="#F9F9F9" TextInside="Logowanie"></Box>
                 </TouchableOpacity>
         </View>
         </View>
         
    
          </ScrollView>
    
);
};

const styles = StyleSheet.create({
    container_background: {
    backgroundColor: 'white'
    },
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
  
    logocontainer: 
    {
      marginTop: 80,
      marginBottom:70,
      justifyContent: 'center',
      alignItems: 'center',
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
      color: '#608844', 
      fontSize: 18,
      lineHeight:22,
      letterSpacing: 0.05,
    },
  
    logo:
    {
      justifyContent: 'center',
      width: 101,
      height: 146,
    }

  
  });

  export default Home;