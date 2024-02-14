import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { result } from './components/result';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss()
    }}>
    <ImageBackground source={require('./assets/background.png')} style={styles.container}>
        <Image source={require('./assets/desi-cuppa.png')}/>
        <Text style={styles.heading}>Play Your Tune!</Text>
        <View style={styles.main}> 
          <TextInput 
          placeholder='Search for music...'
          style={styles.searchBox}
          />
          <View style={styles.searchBtn}>
            <Button title='Search' onPress={result} color='#0d6efd' />
          </View>
        </View>
      <StatusBar style="auto" />
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    color:'white',
    fontWeight:'bold',
    fontSize:28,
    marginBottom:20
  },
  main : {
    width:'80%',
    justifyContent:'center'
  },
  searchBox:{
    paddingRight:10,
    paddingLeft:10,
    paddingTop:5,
    paddingBottom:5,
    margin:10,
    width:'90%',
    borderRadius:10,
    backgroundColor:'white'
  },
  searchBtn : {
    margin:10,
    width:'90%', 
    borderRadius:10,
  }
});
