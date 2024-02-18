import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Navigator from '../routes/homeStack';
import {styles} from '../styles/styles'

export default function Home({navigation}) {

  const pressHandler = () => {
    // console.log('Btn pressed')
    navigation.navigate('Results')

  }

  return (
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss()
    }}>
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        <Image source={require('../assets/desi-cuppa.png')}/>
        <Text style={styles.heading}>Play Your Tune!</Text>
        <View style={styles.main}> 
          <TextInput 
          placeholder='Search for music...'
          style={styles.searchBox}
          />
          <View style={styles.searchBtn}>
            <Button title='Search' onPress={pressHandler} color='#0d6efd' />
          </View>
        </View>
      <StatusBar style="auto" />
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
}