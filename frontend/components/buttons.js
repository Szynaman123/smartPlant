import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const RegiButton = props =>
{
    
    const buttonColor =
    { 
        backgroundColor: props.colorHex,
    };
    const buttonTxtColor = 
    {
        color: props.colorTextHex,
    }

    return(
        <Button style = {[styles.box, buttonColor]}>
      <Text style = {[styles.text, buttonTxtColor]}>
      {props.TextInside}
      </Text>
        </Button>
    );
};



const styles = StyleSheet.create(
    {
        box:
        {
          padding:20,
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 30,
        },

        text:
        {
          textAlign: 'center',
          fontSize: 18
        },
      
        green_text:
        {
          textAlign: 'center',
          color: '#98BF63', 
          fontSize: 18
        },

        white_text:
        {
          textAlign: 'center',
          color: '#EAF2E0', 
          fontSize: 18
        },
        
    });

    export default RegiButton;
