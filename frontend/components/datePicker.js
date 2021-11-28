import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../constants/colors';
import { useDate, useDateGlobal } from '../context/LoginProvider';

const DatePicker = () =>
{
const {startDate, setStartDate} = useDate();
const { setStartDateGlobal} = useDateGlobal();

   const dateChangeHandler = (date) =>
   {
       setStartDate(date);
   }

   let start = startDate ? startDate.toString() : '';
    let dateFormat =[];
    for (let i=3; i<16; i++)
    {
        dateFormat.push(start[i]);
    }

    
    dateFormat = dateFormat.join("");
    dateFormat = dateFormat.replace('Jan', '01');
    dateFormat = dateFormat.replace('Feb', '02');
    dateFormat = dateFormat.replace('Mar', '03');
    dateFormat = dateFormat.replace('Apr', '04');
    dateFormat = dateFormat.replace('May', '05');
    dateFormat = dateFormat.replace('Jun', '06');
    dateFormat = dateFormat.replace('Jul', '07');
    dateFormat = dateFormat.replace('Aug', '08');
    dateFormat = dateFormat.replace('Sep', '09');
    dateFormat = dateFormat.replace('Oct', '10');
    dateFormat = dateFormat.replace('Nov', '11');
    dateFormat = dateFormat.replace('Dec', '12');

    let day =[];
    let month =[];
    let year =[];

        month.push(dateFormat[1]);
        month.push(dateFormat[2]);

        day.push(dateFormat[4]);
        day.push(dateFormat[5]);

        year.push(dateFormat[7]);
        year.push(dateFormat[8]);
        year.push(dateFormat[9]);
        year.push(dateFormat[10]);

        let zmiennaMongo=[];
        zmiennaMongo.push(year);
        zmiennaMongo.push('-');
        zmiennaMongo.push(month);
        zmiennaMongo.push('-');
        zmiennaMongo.push(day);

        

    start = zmiennaMongo;


    

    return (
      <View style={styles.container}>
        <CalendarPicker
        weekdays={['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd']}
        months={['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']}
        previousTitle="Poprzedni"
        nextTitle="Następny"
          onDateChange={dateChangeHandler}

        />

        <View>
          <Text style={styles.text}>WYBRANA DATA:{ start }</Text>
        </View>
      </View>
    );
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    //height: Dimensions.get('window').width*0.6,
    //width: Dimensions.get('window').width*0.6,
  },

  text: 
  {
      fontSize: 15,
      color: Colors.PastelGreen,
  }
});

export default DatePicker;
