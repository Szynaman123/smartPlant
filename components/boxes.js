import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Box = props =>
{
    
    const boxColor =
    { 
        backgroundColor: props.colorHex,
    };
    const txtColor = 
    {
        color: props.colorTextHex,
    }

    return(
        <View style = {[styles.box, boxColor]}>
      <Text style = {[styles.text, txtColor]}>
      {props.TextInside}
      </Text>
        </View>
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

    export default Box;

